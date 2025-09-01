import React, { useState } from 'react';

const DocumentationPage = () => {
    const [activeSection, setActiveSection] = useState('introduction');

    const sections = [
        { id: 'introduction', title: 'Introduction' },
        { id: 'features', title: 'Features' },
        { id: 'architecture', title: 'System Architecture' },
        { id: 'setup', title: 'Setup Instructions' },
        { id: 'usage', title: 'Usage Guide' },
        { id: 'api', title: 'API Documentation' },
        { id: 'database', title: 'Database Schema' },
        { id: 'security', title: 'Security' },
        { id: 'deployment', title: 'Deployment' },
        { id: 'future', title: 'Future Enhancements' }
    ];

    const CodeBlock = ({ children, language = 'bash' }) => (
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4 font-mono">
            <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">{language}</span>
                <button className="text-xs text-gray-400 hover:text-gray-300">Copy</button>
            </div>
            <pre className="text-sm">{children}</pre>
        </div>
    );

    const ApiEndpoint = ({ method, endpoint, description }) => (
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-3 mb-2">
        <span className={`px-2 py-1 rounded text-xs font-semibold ${
            method === 'POST' ? 'bg-gray-800 text-white' :
                method === 'GET' ? 'bg-gray-600 text-white' :
                    method === 'PATCH' ? 'bg-gray-500 text-white' :
                        'bg-gray-400 text-white'
        }`}>
          {method}
        </span>
                <code className="text-sm font-mono text-gray-700">{endpoint}</code>
            </div>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Simple Header with Logo */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center py-6">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mr-4">
                                <span className="text-white font-bold text-lg tracking-tight">UAPP</span>
                            </div>
                            <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Documentation</h1>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex gap-8">
                    {/* Sidebar Navigation */}
                    <nav className="w-64 flex-shrink-0">
                        <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-24">
                            <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">Table of Contents</h3>
                            <ul className="space-y-2">
                                {sections.map((section) => (
                                    <li key={section.id}>
                                        <button
                                            onClick={() => setActiveSection(section.id)}
                                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors tracking-wide ${
                                                activeSection === section.id
                                                    ? 'bg-gray-900 text-white'
                                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                            }`}
                                        >
                                            {section.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>

                    {/* Main Content */}
                    <main className="flex-1 bg-white rounded-lg border border-gray-200 p-8">
                        {activeSection === 'introduction' && (
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Introduction</h2>

                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-wide">What is this?</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        The Internal Project Management Portal is a comprehensive web application designed for college
                                        project management, enabling seamless collaboration between students, faculty, and administrators.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">Target Users</h3>
                                        <ul className="text-gray-700 space-y-2 leading-relaxed">
                                            <li>• <strong>Students:</strong> Submit and manage projects</li>
                                            <li>• <strong>Faculty:</strong> Guide and evaluate projects</li>
                                            <li>• <strong>Administrators:</strong> Oversee all projects</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">Tech Stack</h3>
                                        <ul className="text-gray-700 space-y-2 leading-relaxed">
                                            <li>• <strong>Backend:</strong> Spring Boot, Java 21</li>
                                            <li>• <strong>Database:</strong> MongoDB Atlas</li>
                                            <li>• <strong>Frontend:</strong> React, Tailwind CSS</li>
                                            <li>• <strong>Auth:</strong> JWT Authentication</li>
                                            <li>• <strong>Cache:</strong> Redis</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Video Presentation Section */}
                                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M8 12l4-2-4-2v4z"/>
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM10 2a8 8 0 100 16 8 8 0 000-16z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-2 tracking-tight">Application Demo Video</h3>
                                    <p className="text-gray-600 mb-4">Watch a complete walkthrough of the Project Management Portal</p>
                                    <button className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors tracking-wide">
                                        Play Demo Video
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeSection === 'features' && (
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Features</h2>

                                <div className="grid gap-6">
                                    <div className="border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">User Management</h3>
                                        <ul className="space-y-2 text-gray-600 leading-relaxed">
                                            <li>• Student registration and secure login</li>
                                            <li>• Role-based access control (Student/Admin)</li>
                                            <li>• JWT-based authentication system</li>
                                        </ul>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Project Submission</h3>
                                        <ul className="space-y-2 text-gray-600 leading-relaxed">
                                            <li>• Complete project details submission</li>
                                            <li>• PDF document upload functionality</li>
                                            <li>• Milestone tracking and management</li>
                                            <li>• Guide and co-guide assignment</li>
                                            <li>• GitHub repository integration</li>
                                        </ul>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Dashboard Features</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">Student Dashboard</h4>
                                                <ul className="space-y-1 text-gray-600 text-sm leading-relaxed">
                                                    <li>• View personal projects</li>
                                                    <li>• Edit project details</li>
                                                    <li>• Track submission status</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">Admin Dashboard</h4>
                                                <ul className="space-y-1 text-gray-600 text-sm leading-relaxed">
                                                    <li>• View all projects</li>
                                                    <li>• Add remarks and feedback</li>
                                                    <li>• User management</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Advanced Features</h3>
                                        <ul className="space-y-2 text-gray-600 leading-relaxed">
                                            <li>• Git timeline visualization</li>
                                            <li>• Redis caching for performance</li>
                                            <li>• Microservices architecture</li>
                                            <li>• Chatbot integration (optional)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'architecture' && (
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">System Architecture</h2>

                                <div className="bg-gray-50 border border-gray-300 rounded-lg p-8 mb-8">
                                    <div className="text-center mb-6">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2 tracking-wide">High-Level Architecture</h3>
                                        <p className="text-gray-600">Microservices-based architecture with clear separation of concerns</p>
                                    </div>

                                    {/* Architecture Diagram */}
                                    <div className="flex flex-col items-center space-y-6">
                                        <div className="bg-white border-2 border-gray-300 rounded-lg p-4 w-48 text-center">
                                            <h4 className="font-semibold text-gray-800 tracking-wide">React Frontend</h4>
                                            <p className="text-sm text-gray-600">User Interface Layer</p>
                                        </div>

                                        <div className="w-1 h-8 bg-gray-400"></div>

                                        <div className="flex space-x-8">
                                            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 w-40 text-center">
                                                <h4 className="font-semibold text-gray-800 tracking-wide">Auth Service</h4>
                                                <p className="text-sm text-gray-600">Spring Boot</p>
                                            </div>
                                            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 w-40 text-center">
                                                <h4 className="font-semibold text-gray-800 tracking-wide">Project Service</h4>
                                                <p className="text-sm text-gray-600">Spring Boot</p>
                                            </div>
                                        </div>

                                        <div className="w-1 h-8 bg-gray-400"></div>

                                        <div className="flex space-x-8">
                                            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 w-40 text-center">
                                                <h4 className="font-semibold text-gray-800 tracking-wide">MongoDB Atlas</h4>
                                                <p className="text-sm text-gray-600">Database</p>
                                            </div>
                                            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 w-40 text-center">
                                                <h4 className="font-semibold text-gray-800 tracking-wide">Redis Cache</h4>
                                                <p className="text-sm text-gray-600">Caching Layer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">Frontend Layer</h3>
                                        <ul className="text-gray-700 space-y-1 text-sm leading-relaxed">
                                            <li>• React.js with modern hooks</li>
                                            <li>• Tailwind CSS for styling</li>
                                            <li>• Vite for build optimization</li>
                                            <li>• JWT token management</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">Backend Services</h3>
                                        <ul className="text-gray-700 space-y-1 text-sm leading-relaxed">
                                            <li>• Authentication microservice</li>
                                            <li>• Project management service</li>
                                            <li>• RESTful API design</li>
                                            <li>• Spring Security integration</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'setup' && (
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Setup Instructions</h2>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 tracking-wide">Backend Setup</h3>

                                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                                            <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">Prerequisites</h4>
                                            <ul className="text-gray-700 space-y-1 text-sm leading-relaxed">
                                                <li>• Java 21 or later</li>
                                                <li>• Apache Maven 3.8+</li>
                                                <li>• MongoDB Atlas account</li>
                                                <li>• Redis server (local or cloud)</li>
                                            </ul>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">1. Clone the Repository</h4>
                                                <CodeBlock>
                                                    {`git clone https://github.com/your-username/project-management-portal.git
cd project-management-portal`}
                                                </CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">2. Configure Environment Variables</h4>
                                                <p className="text-gray-600 mb-2">Create <code className="bg-gray-100 px-2 py-1 rounded font-mono">application.properties</code> in each service:</p>
                                                <CodeBlock language="properties">
                                                    {`# Auth Service
spring.data.mongodb.uri=mongodb+srv://username:password@cluster.mongodb.net/authdb
jwt.secret=your-secret-key
jwt.expiration=86400

# Project Service  
spring.data.mongodb.uri=mongodb+srv://username:password@cluster.mongodb.net/projectdb
redis.host=localhost
redis.port=6379`}
                                                </CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">3. Run the Services</h4>
                                                <CodeBlock>
                                                    {`# Start Auth Service (Port 8080)
cd auth-service
mvn spring-boot:run

# Start Project Service (Port 8081)  
cd ../submission-service
mvn spring-boot:run`}
                                                </CodeBlock>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 tracking-wide">Frontend Setup</h3>

                                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                                            <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">Prerequisites</h4>
                                            <ul className="text-gray-700 space-y-1 text-sm leading-relaxed">
                                                <li>• Node.js 18+ and npm/yarn</li>
                                                <li>• Modern web browser</li>
                                            </ul>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">1. Install Dependencies</h4>
                                                <CodeBlock>
                                                    {`cd frontend
npm install`}
                                                </CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">2. Configure Environment Variables</h4>
                                                <p className="text-gray-600 mb-2">Create <code className="bg-gray-100 px-2 py-1 rounded font-mono">.env</code> file:</p>
                                                <CodeBlock language="bash">
                                                    {`VITE_AUTH_API=http://localhost:8080
VITE_PROJECTS_API=http://localhost:8081
VITE_GITVIEW_API=http://localhost:8082`}
                                                </CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">3. Start Development Server</h4>
                                                <CodeBlock>
                                                    {`npm run dev
# Application will run on http://localhost:5173`}
                                                </CodeBlock>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'usage' && (
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Usage Guide</h2>

                                <div className="space-y-8">
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Student Workflow</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <span className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-semibold">1</span>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 tracking-wide">Register & Login</h4>
                                                    <p className="text-gray-600 text-sm">Create account with college email and secure login</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-semibold">2</span>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 tracking-wide">Submit Project</h4>
                                                    <p className="text-gray-600 text-sm">Fill project details, add team members, assign guides</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-semibold">3</span>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 tracking-wide">Upload Documents</h4>
                                                    <p className="text-gray-600 text-sm">Upload project PDF and link GitHub repository</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-semibold">4</span>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 tracking-wide">Track Progress</h4>
                                                    <p className="text-gray-600 text-sm">Monitor project status and view feedback from guides</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Admin Workflow</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <span className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-semibold">1</span>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 tracking-wide">Admin Login</h4>
                                                    <p className="text-gray-600 text-sm">Use hardcoded admin credentials to access dashboard</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-semibold">2</span>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 tracking-wide">Review Projects</h4>
                                                    <p className="text-gray-600 text-sm">Browse all submitted projects with filtering options</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-semibold">3</span>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 tracking-wide">Project Details</h4>
                                                    <p className="text-gray-600 text-sm">Open detailed project view with all submitted information</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-semibold">4</span>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 tracking-wide">Add Feedback</h4>
                                                    <p className="text-gray-600 text-sm">Provide remarks and feedback for student projects</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">Pro Tips</h3>
                                        <ul className="text-gray-700 space-y-2 text-sm leading-relaxed">
                                            <li>• Save drafts frequently when filling project details</li>
                                            <li>• Use descriptive commit messages for better Git timeline visualization</li>
                                            <li>• Regular sync with guides through the platform</li>
                                            <li>• Keep project documentation updated in the linked repository</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'api' && (
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">API Documentation</h2>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-4 tracking-wide">Authentication Service</h3>
                                        <p className="text-gray-600 mb-4">Base URL: <code className="bg-gray-100 px-2 py-1 rounded font-mono">http://localhost:8080</code></p>

                                        <div className="space-y-3">
                                            <ApiEndpoint
                                                method="POST"
                                                endpoint="/auth/register"
                                                description="Register a new user account"
                                            />
                                            <ApiEndpoint
                                                method="POST"
                                                endpoint="/auth/login"
                                                description="Authenticate user and return JWT token"
                                            />
                                        </div>

                                        <div className="mt-6">
                                            <h4 className="font-semibold text-gray-800 mb-3 tracking-wide">Sample Login Request</h4>
                                            <CodeBlock language="bash">
                                                {`curl -X POST http://localhost:8080/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "student@college.edu",
    "password": "securepassword"
  }'`}
                                            </CodeBlock>

                                            <h4 className="font-semibold text-gray-800 mb-3 mt-4 tracking-wide">Sample Response</h4>
                                            <CodeBlock language="json">
                                                {`{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "65ef4f2cba123",
    "email": "student@college.edu",
    "role": "STUDENT"
  }
}`}
                                            </CodeBlock>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-4 tracking-wide">Project Service</h3>
                                        <p className="text-gray-600 mb-4">Base URL: <code className="bg-gray-100 px-2 py-1 rounded font-mono">http://localhost:8081</code></p>

                                        <div className="space-y-3">
                                            <ApiEndpoint
                                                method="POST"
                                                endpoint="/api/projects"
                                                description="Create a new project submission"
                                            />
                                            <ApiEndpoint
                                                method="GET"
                                                endpoint="/api/projects/{id}"
                                                description="Fetch project details by ID"
                                            />
                                            <ApiEndpoint
                                                method="PATCH"
                                                endpoint="/api/projects/{id}/remarks"
                                                description="Add admin remarks to project (Admin only)"
                                            />
                                            <ApiEndpoint
                                                method="GET"
                                                endpoint="/api/projects/{id}/pdf"
                                                description="Download project PDF summary"
                                            />
                                            <ApiEndpoint
                                                method="GET"
                                                endpoint="/api/projects/user/{userId}"
                                                description="Get all projects for a specific user"
                                            />
                                        </div>

                                        <div className="mt-6">
                                            <h4 className="font-semibold text-gray-800 mb-3 tracking-wide">Sample Project Creation</h4>
                                            <CodeBlock language="bash">
                                                {`curl -X POST http://localhost:8081/api/projects \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
  -d '{
    "title": "AI Chatbot for College",
    "description": "Intelligent chatbot for handling student queries",
    "students": ["Alice Johnson", "Bob Smith"],
    "guideName": "Dr. Sharma",
    "coGuideName": "Prof. Verma",
    "githubRepo": "https://github.com/example/ai-chatbot",
    "startDate": "2025-01-15",
    "finalSubmissionDate": "2025-04-30"
  }'`}
                                            </CodeBlock>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'database' && (
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Database Schema</h2>

                                <div className="space-y-8">
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 tracking-wide">MongoDB Collections</h3>
                                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                                            <div className="bg-white p-3 rounded border border-gray-200">
                                                <h4 className="font-semibold text-gray-800 tracking-wide">users</h4>
                                                <p className="text-gray-600">User accounts & auth</p>
                                            </div>
                                            <div className="bg-white p-3 rounded border border-gray-200">
                                                <h4 className="font-semibold text-gray-800 tracking-wide">projects</h4>
                                                <p className="text-gray-600">Project submissions</p>
                                            </div>
                                            <div className="bg-white p-3 rounded border border-gray-200">
                                                <h4 className="font-semibold text-gray-800 tracking-wide">remarks</h4>
                                                <p className="text-gray-600">Admin feedback</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-4 tracking-wide">Project Document Structure</h3>
                                        <CodeBlock language="json">
                                            {`{
  "_id": "65ef4f2cba123456789",
  "title": "AI Chatbot for College",
  "description": "An intelligent chatbot system...",
  "students": [
    "Alice Johnson", 
    "Bob Smith"
  ],
  "guideName": "Dr. Rajesh Sharma",
  "coGuideName": "Prof. Meera Verma",
  "githubRepo": "https://github.com/example/ai-chatbot",
  "startDate": "2025-01-15T00:00:00Z",
  "finalSubmissionDate": "2025-04-30T23:59:59Z",
  "submissionStatus": "IN_PROGRESS",
  "milestones": [
    {
      "title": "Project Planning",
      "description": "Initial planning and requirement gathering",
      "dueDate": "2025-02-01T00:00:00Z",
      "status": "COMPLETED"
    }
  ],
  "remarks": [
    {
      "text": "Good progress on initial setup.",
      "author": "admin",
      "authorName": "Dr. Admin",
      "createdAt": "2025-02-10T10:30:00Z"
    }
  ],
  "documents": {
    "projectPdf": {
      "filename": "ai-chatbot-proposal.pdf",
      "uploadedAt": "2025-01-20T09:15:00Z",
      "fileSize": 2048576
    }
  },
  "createdAt": "2025-01-15T08:00:00Z",
  "updatedAt": "2025-02-15T14:20:00Z",
  "createdBy": "65ef4f2cba987654321"
}`}
                                        </CodeBlock>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-4 tracking-wide">User Document Structure</h3>
                                        <CodeBlock language="json">
                                            {`{
  "_id": "65ef4f2cba987654321",
  "email": "alice.johnson@college.edu",
  "password": "$2a$10$hashedpassword...",
  "firstName": "Alice",
  "lastName": "Johnson", 
  "role": "STUDENT",
  "studentId": "CS2021001",
  "department": "Computer Science",
  "semester": 8,
  "isActive": true,
  "createdAt": "2025-01-10T10:00:00Z",
  "lastLogin": "2025-02-15T09:30:00Z"
}`}
                                        </CodeBlock>
                                    </div>

                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">Indexing Strategy</h3>
                                        <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
                                            <p>• <strong>users:</strong> Compound index on <code>email</code> and <code>role</code></p>
                                            <p>• <strong>projects:</strong> Index on <code>createdBy</code>, <code>submissionStatus</code></p>
                                            <p>• <strong>projects:</strong> Text index on <code>title</code> and <code>description</code> for search</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'security' && (
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Security</h2>

                                <div className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4 tracking-wide">Authentication</h3>
                                            <ul className="text-gray-700 space-y-2 text-sm leading-relaxed">
                                                <li>• JWT-based stateless authentication</li>
                                                <li>• Password hashing with BCrypt</li>
                                                <li>• Token expiration and refresh mechanism</li>
                                                <li>• Secure session management in frontend</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4 tracking-wide">Authorization</h3>
                                            <ul className="text-gray-700 space-y-2 text-sm leading-relaxed">
                                                <li>• Role-based access control (RBAC)</li>
                                                <li>• Student vs Admin permission levels</li>
                                                <li>• Resource-level access validation</li>
                                                <li>• API endpoint protection</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 tracking-wide">Security Implementation Details</h3>

                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">JWT Token Structure</h4>
                                                <CodeBlock language="json">
                                                    {`{
  "header": {
    "alg": "HS256",
    "typ": "JWT"
  },
  "payload": {
    "sub": "user@college.edu",
    "userId": "65ef4f2cba123",
    "role": "STUDENT", 
    "iat": 1640995200,
    "exp": 1641081600
  }
}`}
                                                </CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">Frontend Security Measures</h4>
                                                <ul className="text-gray-600 space-y-1 text-sm leading-relaxed">
                                                    <li>• Secure token storage in sessionStorage</li>
                                                    <li>• Automatic token cleanup on logout</li>
                                                    <li>• Protected routes with authentication guards</li>
                                                    <li>• CSRF protection for form submissions</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">Backend Security Features</h4>
                                                <ul className="text-gray-600 space-y-1 text-sm leading-relaxed">
                                                    <li>• CORS configuration for cross-origin requests</li>
                                                    <li>• Request rate limiting and throttling</li>
                                                    <li>• Input validation and sanitization</li>
                                                    <li>• Database query parameterization</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">Security Best Practices</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">Development</h4>
                                                <ul className="text-gray-700 space-y-1 text-sm leading-relaxed">
                                                    <li>• Environment variables for secrets</li>
                                                    <li>• Regular dependency updates</li>
                                                    <li>• Code security scanning</li>
                                                    <li>• SSL/TLS in production</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">Operations</h4>
                                                <ul className="text-gray-700 space-y-1 text-sm leading-relaxed">
                                                    <li>• Database access controls</li>
                                                    <li>• API monitoring and logging</li>
                                                    <li>• Regular security audits</li>
                                                    <li>• Backup and recovery procedures</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'deployment' && (
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Deployment</h2>

                                <div className="space-y-8">
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Backend Deployment (Render)</h3>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">1. Prepare for Deployment</h4>
                                                <CodeBlock>
                                                    {`# Create Dockerfile for each service
FROM openjdk:21-jdk-slim
COPY target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]`}
                                                </CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">2. Deploy to Render</h4>
                                                <ul className="text-gray-700 space-y-1 text-sm leading-relaxed">
                                                    <li>• Connect GitHub repository to Render</li>
                                                    <li>• Configure build and start commands</li>
                                                    <li>• Set environment variables for production</li>
                                                    <li>• Enable auto-deploy on git push</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">3. Environment Configuration</h4>
                                                <CodeBlock language="bash">
                                                    {`# Production Environment Variables
MONGODB_URI=mongodb+srv://prod-user:password@cluster.mongodb.net/
JWT_SECRET=your-production-secret-key
REDIS_URL=redis://redis-server:6379
CORS_ALLOWED_ORIGINS=https://your-frontend-domain.vercel.app`}
                                                </CodeBlock>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Frontend Deployment (Vercel)</h3>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">1. Build Configuration</h4>
                                                <CodeBlock language="json">
                                                    {`{
  "name": "project-management-portal",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}`}
                                                </CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">2. Vercel Deployment</h4>
                                                <CodeBlock>
                                                    {`# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod

# Or deploy via GitHub integration
# 1. Connect repository to Vercel
# 2. Configure build settings
# 3. Set environment variables
# 4. Deploy automatically on push`}
                                                </CodeBlock>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">3. Production Environment Variables</h4>
                                                <CodeBlock language="bash">
                                                    {`VITE_AUTH_API=https://auth-service.onrender.com
VITE_PROJECTS_API=https://project-service.onrender.com
VITE_GITVIEW_API=https://git-service.onrender.com`}
                                                </CodeBlock>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">Domain Setup</h3>
                                            <ul className="text-gray-700 space-y-2 text-sm leading-relaxed">
                                                <li>• Configure custom domain in Vercel</li>
                                                <li>• Set up SSL certificates (auto)</li>
                                                <li>• Update CORS origins in backend</li>
                                                <li>• Configure DNS records</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">Monitoring</h3>
                                            <ul className="text-gray-700 space-y-2 text-sm leading-relaxed">
                                                <li>• Set up application monitoring</li>
                                                <li>• Configure error tracking</li>
                                                <li>• Database performance monitoring</li>
                                                <li>• Uptime monitoring alerts</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">CI/CD Pipeline</h3>
                                        <CodeBlock language="yaml">
                                            {`# .github/workflows/deploy.yml
name: Deploy to Production
on:
  push:
    branches: [main]

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-java@v2
        with:
          java-version: '21'
      - run: mvn clean package
      - run: docker build -t backend .
      
  deploy-frontend:
    runs-on: ubuntu-latest  
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm ci && npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}`}
                                        </CodeBlock>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'future' && (
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Future Enhancements</h2>

                                <div className="grid gap-6">
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Faculty Portal</h3>
                                        <ul className="text-gray-700 space-y-2 leading-relaxed">
                                            <li>• <strong>Separate Faculty Login:</strong> Dedicated authentication for guides and co-guides</li>
                                            <li>• <strong>Project Guidance Tools:</strong> Direct communication channel with students</li>
                                            <li>• <strong>Progress Tracking:</strong> Real-time monitoring of assigned projects</li>
                                            <li>• <strong>Milestone Management:</strong> Set and track project milestones</li>
                                        </ul>
                                        <div className="mt-4 text-sm text-gray-600 bg-gray-100 p-3 rounded">
                                            <strong>Timeline:</strong> Phase 2 - Q2 2025
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Evaluation System</h3>
                                        <ul className="text-gray-700 space-y-2 leading-relaxed">
                                            <li>• <strong>Scoring Matrix:</strong> Standardized evaluation criteria</li>
                                            <li>• <strong>Multiple Evaluators:</strong> Guide, co-guide, and external examiner scores</li>
                                            <li>• <strong>Automated Calculations:</strong> Weighted scoring and final grade computation</li>
                                            <li>• <strong>Report Generation:</strong> Detailed evaluation reports</li>
                                        </ul>
                                        <div className="mt-4 text-sm text-gray-600 bg-gray-100 p-3 rounded">
                                            <strong>Timeline:</strong> Phase 3 - Q3 2025
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Real-time Notifications</h3>
                                        <ul className="text-gray-700 space-y-2 leading-relaxed">
                                            <li>• <strong>WebSocket Integration:</strong> Real-time updates for project changes</li>
                                            <li>• <strong>Email Notifications:</strong> Automated emails for important events</li>
                                            <li>• <strong>Mobile Push:</strong> Progressive Web App notifications</li>
                                            <li>• <strong>Custom Alerts:</strong> User-configurable notification preferences</li>
                                        </ul>
                                        <div className="mt-4 text-sm text-gray-600 bg-gray-100 p-3 rounded">
                                            <strong>Timeline:</strong> Phase 2 - Q2 2025
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">DevOps Integration</h3>
                                        <ul className="text-gray-700 space-y-2 leading-relaxed">
                                            <li>• <strong>CI/CD Pipeline:</strong> Automated testing and deployment</li>
                                            <li>• <strong>Code Quality Checks:</strong> Integration with SonarQube and CodeClimate</li>
                                            <li>• <strong>GitHub Actions:</strong> Automated workflows for project repositories</li>
                                            <li>• <strong>Docker Containerization:</strong> Streamlined deployment process</li>
                                        </ul>
                                        <div className="mt-4 text-sm text-gray-600 bg-gray-100 p-3 rounded">
                                            <strong>Timeline:</strong> Phase 4 - Q4 2025
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Advanced Features</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">AI-Powered Features</h4>
                                                <ul className="text-gray-700 space-y-1 text-sm leading-relaxed">
                                                    <li>• Plagiarism detection for reports</li>
                                                    <li>• Automated code review suggestions</li>
                                                    <li>• Smart project categorization</li>
                                                    <li>• Intelligent deadline reminders</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">Analytics & Reporting</h4>
                                                <ul className="text-gray-700 space-y-1 text-sm leading-relaxed">
                                                    <li>• Department-wise project statistics</li>
                                                    <li>• Student performance analytics</li>
                                                    <li>• Resource utilization reports</li>
                                                    <li>• Trend analysis dashboards</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-4 text-sm text-gray-600 bg-gray-100 p-3 rounded">
                                            <strong>Timeline:</strong> Future Releases - 2026+
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 bg-gray-800 text-white rounded-lg p-6 text-center">
                                    <h3 className="text-xl font-semibold mb-2 tracking-tight">Roadmap Summary</h3>
                                    <p className="mb-4 text-gray-300">Transforming project management with modern technology and user-centric design</p>
                                    <div className="flex justify-center gap-4 text-sm flex-wrap">
                                        <span className="bg-white bg-opacity-20 px-3 py-1 rounded">Phase 1: Core Features</span>
                                        <span className="bg-white bg-opacity-20 px-3 py-1 rounded">Phase 2: Faculty Portal</span>
                                        <span className="bg-white bg-opacity-20 px-3 py-1 rounded">Phase 3: Evaluation</span>
                                        <span className="bg-white bg-opacity-20 px-3 py-1 rounded">Phase 4: DevOps</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">Project Management Portal</h3>
                            <p className="text-sm text-gray-400">Built with React, Spring Boot, and modern web technologies</p>
                        </div>
                        <div className="text-sm text-gray-400">
                            <p>Version 1.0.0</p>
                            <p>Last updated: August 2025</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default DocumentationPage;
