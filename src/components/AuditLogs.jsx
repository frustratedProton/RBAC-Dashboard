import { useEffect, useState } from 'react';

const AuditLogs = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/auditLogs')
            .then((res) => res.json())
            .then((data) => setLogs(data));
    }, []);

    // show top 5 logs
    const recentLogs = logs.slice(0, 5);

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Audit Logs</h2>
            <table className="min-w-full table-auto border-collapse bg-gray-100 rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="border-b p-4 text-left">Timestamp</th>
                        <th className="border-b p-4 text-left">User</th>
                        <th className="border-b p-4 text-left">Action</th>
                        <th className="border-b p-4 text-left">Target</th>
                        <th className="border-b p-4 text-left">Outcome</th>
                    </tr>
                </thead>
                <tbody>
                    {recentLogs.map((log) => (
                        <tr key={log.id} className="hover:bg-gray-200">
                            <td className="border-b p-4">{log.timestamp}</td>
                            <td className="border-b p-4">{log.user}</td>
                            <td className="border-b p-4">{log.action}</td>
                            <td className="border-b p-4">{log.target}</td>
                            <td className="border-b p-4">{log.outcome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AuditLogs;
