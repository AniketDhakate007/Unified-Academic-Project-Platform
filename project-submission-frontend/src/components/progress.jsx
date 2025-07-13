import React, { useState } from 'react';
import { Github, GitBranch, GitCommit, Star, Eye, Users, Calendar, Code, TrendingUp } from 'lucide-react';

const GitHubProgressPage = () => {
  const [githubUrl, setGithubUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [repoData, setRepoData] = useState(null);
  const [error, setError] = useState('');

  const extractRepoInfo = (url) => {
    const regex = /github\.com\/([^\/]+)\/([^\/]+)/;
    const match = url.match(regex);
    return match ? { owner: match[1], repo: match[2] } : null;
  };

  const fetchGitHubData = async () => {
    if (!githubUrl) {
      setError('Please enter a GitHub repository URL');
      return;
    }

    const repoInfo = extractRepoInfo(githubUrl);
    if (!repoInfo) {
      setError('Invalid GitHub URL format');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { owner, repo } = repoInfo;
      
      // Use a CORS proxy for the GitHub API
      const proxyUrl = 'https://api.allorigins.win/get?url=';
      const baseUrl = 'https://api.github.com/repos/';
      
      // Fetch repository data
      const repoResponse = await fetch(`${proxyUrl}${encodeURIComponent(baseUrl + owner + '/' + repo)}`);
      if (!repoResponse.ok) throw new Error('Failed to fetch repository data');
      const repoResult = await repoResponse.json();
      const repoData = JSON.parse(repoResult.contents);
      
      if (repoData.message) {
        throw new Error(repoData.message === 'Not Found' ? 'Repository not found. Please check the URL and make sure the repository is public.' : repoData.message);
      }

      // Fetch commits
      const commitsResponse = await fetch(`${proxyUrl}${encodeURIComponent(baseUrl + owner + '/' + repo + '/commits?per_page=10')}`);
      const commitsResult = await commitsResponse.json();
      const commitsData = JSON.parse(commitsResult.contents);

      // Fetch contributors
      const contributorsResponse = await fetch(`${proxyUrl}${encodeURIComponent(baseUrl + owner + '/' + repo + '/contributors?per_page=5')}`);
      const contributorsResult = await contributorsResponse.json();
      const contributorsData = JSON.parse(contributorsResult.contents);

      // Fetch languages
      const languagesResponse = await fetch(`${proxyUrl}${encodeURIComponent(baseUrl + owner + '/' + repo + '/languages')}`);
      const languagesResult = await languagesResponse.json();
      const languagesData = JSON.parse(languagesResult.contents);

      setRepoData({
        repo: repoData,
        commits: Array.isArray(commitsData) ? commitsData : [],
        contributors: Array.isArray(contributorsData) ? contributorsData : [],
        languages: languagesData || {}
      });
    } catch (err) {
      console.error('Error fetching GitHub data:', err);
      setError(err.message || 'Failed to fetch repository data. Please check the URL and try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getLanguagePercentage = (languages) => {
    const total = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);
    return Object.entries(languages)
      .map(([lang, bytes]) => ({
        language: lang,
        percentage: ((bytes / total) * 100).toFixed(1)
      }))
      .sort((a, b) => b.percentage - a.percentage);
  };

  const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Github className="w-6 h-6 text-blue-600" />
        </div>
      </div>
      <p className="mt-4 text-gray-600">Fetching repository data...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Github className="w-12 h-12 text-gray-800 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">GitHub Progress Tracker</h1>
          </div>
          <p className="text-gray-600 text-lg">Track your repository's progress, commits, and contributions</p>
        </div>

        {/* URL Input */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="url"
              placeholder="Enter GitHub repository URL (e.g., https://github.com/owner/repo)"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <button
              onClick={fetchGitHubData}
              disabled={loading}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {loading ? 'Fetching...' : 'Analyze Repository'}
            </button>
          </div>
          {error && (
            <div className="mt-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg">
              {error}
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && <LoadingSpinner />}

        {/* Repository Data */}
        {repoData && !loading && (
          <div className="space-y-6">
            {/* Repository Overview */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {repoData.repo.full_name}
                  </h2>
                  <p className="text-gray-600 mb-4">{repoData.repo.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Created: {formatDate(repoData.repo.created_at)}
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Updated: {formatDate(repoData.repo.updated_at)}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {repoData.repo.language}
                  </span>
                  {repoData.repo.private && (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      Private
                    </span>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{repoData.repo.stargazers_count}</div>
                  <div className="text-gray-600">Stars</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Eye className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{repoData.repo.watchers_count}</div>
                  <div className="text-gray-600">Watchers</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <GitBranch className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{repoData.repo.forks_count}</div>
                  <div className="text-gray-600">Forks</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Code className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{repoData.repo.size}</div>
                  <div className="text-gray-600">KB</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Recent Commits */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <GitCommit className="w-5 h-5 mr-2" />
                  Recent Commits
                </h3>
                <div className="space-y-4">
                  {repoData.commits.map((commit, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                      <div className="text-sm font-medium text-gray-800">
                        {commit.commit.message.split('\n')[0]}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        By {commit.commit.author.name} • {formatDate(commit.commit.author.date)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Contributors */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Top Contributors
                </h3>
                <div className="space-y-3">
                  {repoData.contributors.map((contributor, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={contributor.avatar_url}
                          alt={contributor.login}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <div className="font-medium text-gray-800">{contributor.login}</div>
                          <div className="text-sm text-gray-600">{contributor.contributions} contributions</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-blue-600">
                          #{index + 1}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages */}
            {Object.keys(repoData.languages).length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Languages Used</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {getLanguagePercentage(repoData.languages).map((lang, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-800">{lang.language}</span>
                      <span className="text-blue-600 font-medium">{lang.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GitHubProgressPage;