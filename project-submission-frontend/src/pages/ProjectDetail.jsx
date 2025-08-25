import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [pdfFile, setPdfFile] = useState(null);
    const Project_URL = import.meta.env.VITE_PROJECTS;
    const GitView = import.meta.env.VITE_GITVIEW;
    const role = sessionStorage.getItem('role');
    const [remarkText, setRemarkText] = useState('');

    // 🔹 Fetch project details
    const loadProject = () => {
        const token = sessionStorage.getItem('token');
        axios
            .get(`${Project_URL}/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => setProject(res.data))
            .catch((err) => console.error('Error loading project', err));
    };

    useEffect(() => {
        loadProject();
    }, [id]);

    const handleAddRemark = async () => {
        if (!remarkText.trim()) return;

        try {
            const token = sessionStorage.getItem("token");

            await axios.post(
                `${Project_URL}/${id}/remarks`,
                { text: remarkText.trim() }, // ✅ matches AddRemarkRequest
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setRemarkText("");

            // Refresh project after adding remark
            const res = await axios.get(`${Project_URL}/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setProject(res.data);

        } catch (e) {
            console.error("Add remark error", e);
            alert("Failed to add remark");
        }
    };

    // 🔹 View PDF
    const handleViewPDF = async () => {
        try {
            const token = sessionStorage.getItem('token');
            const response = await axios.get(`${Project_URL}/${id}/pdf`, {
                headers: { Authorization: `Bearer ${token}` },
                responseType: 'blob',
            });

            const file = new Blob([response.data], { type: 'application/pdf' });
            const fileURL = URL.createObjectURL(file);
            window.open(fileURL, '_blank');
        } catch (err) {
            console.error('Error fetching PDF', err);
            alert('Could not load PDF');
        }
    };

    if (!project)
        return (
            <div className="pd-bg">
                <div className="pd-grid-overlay"></div>
                <div className="pd-gradient-orb pd-gradient-orb-1"></div>
                <div className="pd-gradient-orb pd-gradient-orb-2"></div>
                <div className="pd-loading">
                    <div className="pd-loading-spinner"></div>
                    <span>Loading Project...</span>
                </div>
            </div>
        );

    return (
        <div className="pd-bg">
            <div className="pd-grid-overlay"></div>
            <div className="pd-gradient-orb pd-gradient-orb-1"></div>
            <div className="pd-gradient-orb pd-gradient-orb-2"></div>

            <main className="pd-content">
                <div className="pd-container">
                    {/* HEADER */}
                    <header className="pd-header">
                        <div className="pd-title-section">
                            <h1 className="pd-title">{project.title}</h1>
                            <div className="pd-title-glow"></div>
                        </div>

                        <div className="pd-metadata">
                            <div className="pd-meta-card">
                                <span className="pd-meta-label">Project Guide</span>
                                <span className="pd-meta-value">{project.guideName}</span>
                            </div>

                            <div className="pd-meta-grid">
                                <div className="pd-meta-card">
                                    <span className="pd-meta-label">Start Date</span>
                                    <span className="pd-meta-value">{project.startDate}</span>
                                </div>
                                <div className="pd-meta-card">
                                    <span className="pd-meta-label">Final Submission</span>
                                    <span className="pd-meta-value">
                    {project.finalSubmissionDate}
                  </span>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* DESCRIPTION */}
                    <section className="pd-description-section">
                        <div className="pd-section-header">
                            <h2>Project Overview</h2>
                            <div className="pd-section-line"></div>
                        </div>
                        <div className="pd-description-content">{project.description}</div>
                    </section>

                    {/* TEAM + TIMELINE */}
                    <div className="pd-main-grid">
                        <section className="pd-section">
                            <div className="pd-section-header">
                                <h2>Team Members</h2>
                                <div className="pd-section-line"></div>
                            </div>
                            <div className="pd-list-container">
                                {project.students?.map((student, idx) => (
                                    <div key={idx} className="pd-list-item">
                                        <div className="pd-list-marker"></div>
                                        <span>{student}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="pd-section">
                            <div className="pd-section-header">
                                <h2>Milestone Timeline</h2>
                                <div className="pd-section-line"></div>
                            </div>
                            <div className="pd-list-container">
                                {project.milestoneDates?.map((milestone, idx) => (
                                    <div key={idx} className="pd-list-item">
                                        <div className="pd-list-marker"></div>
                                        <span>{milestone}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* REPO */}
                    <section className="pd-section pd-repo-section">
                        <div className="pd-section-header">
                            <h2>Repository</h2>
                            <div className="pd-section-line"></div>
                        </div>
                        <div className="pd-repo-content">
                            <a
                                className="pd-repo-link"
                                href={project.githubRepo}
                                rel="noopener noreferrer"
                            >
                                {project.githubRepo}
                            </a>
                        </div>
                    </section>

                    {/* ACTIONS */}
                    <div className="pd-actions">
                        <a
                            href={`${GitView}//?repo=${encodeURIComponent(project.githubRepo)}`}
                            rel="noopener noreferrer"
                            className="pd-btn-link"
                        >
                            <button className="pd-btn">
                                <span className="pd-btn-text">View Git Timeline</span>
                                <div className="pd-btn-glow"></div>
                            </button>
                        </a>

                        <button className="pd-btn" onClick={handleViewPDF}>
                            <span className="pd-btn-text">View Project Summary PDF</span>
                            <div className="pd-btn-glow"></div>
                        </button>

                        {/* STUDENT-ONLY: Edit button */}
                        {role === 'STUDENT' && (
                            <button
                                className="pd-btn"
                                onClick={() => navigate(`/student/project/${id}/edit`)}
                            >
                                <span className="pd-btn-text">Edit Project</span>
                                <div className="pd-btn-glow"></div>
                            </button>
                        )}
                    </div>

                    {/* ADMIN-ONLY: Remarks section */}
                    {/* Remarks Section */}
                    <section className="bg-white rounded-2xl shadow-md p-6 mt-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">Remarks</h2>
                        <div className="h-[2px] w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded"></div>
                    </div>

                    {/* Remarks List */}
                    <div className="space-y-4">
                        {project.remarks && project.remarks.length > 0 ? (
                        project.remarks.map((remark, idx) => (
                            <div
                            key={idx}
                            className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:shadow-sm transition"
                            >
                            {/* Marker / Avatar Circle */}
                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                {remark.author?.charAt(0).toUpperCase()}
                            </div>

                            {/* Remark Content */}
                            <div className="flex-1">
                                <p className="text-gray-700">
                                <span className="font-medium text-indigo-600">{remark.author}</span>:{" "}
                                {remark.text}
                                </p>
                                <small className="text-gray-400 text-xs">
                                {new Date(remark.createdAt).toLocaleString()}
                                </small>
                            </div>
                            </div>
                        ))
                        ) : (
                        <p className="text-gray-400 italic">No remarks yet.</p>
                        )}
                    </div>

                    {/* Input Box for ADMIN */}
                    {role === "ADMIN" && (
                        <div className="mt-6 flex gap-2">
                        <input
                            type="text"
                            className="flex-1 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 px-3 py-2 outline-none text-sm"
                            placeholder="Write a remark..."
                            value={remarkText}
                            onChange={(e) => setRemarkText(e.target.value)}
                        />
                        <button
                            onClick={handleAddRemark}
                            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition"
                        >
                            Add
                        </button>
                        </div>
                    )}
                    </section>


                </div>
            </main>
        </div>
    );
};

export default ProjectDetail;