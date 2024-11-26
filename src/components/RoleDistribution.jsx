/* eslint-disable react/prop-types */
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';

export const UserAdminRoleDistribution = ({ users }) => {
    // Calculate counts for user and admin roles
    const roleCounts = users.reduce((counts, user) => {
        counts[user.role] = (counts[user.role] || 0) + 1;
        return counts;
    }, {});

    // Prepare data for the pie chart
    const data = Object.keys(roleCounts).map((role) => ({
        name: role,
        value: roleCounts[role],
    }));

    const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];

    return (
        <div className="mb-6 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
                User vs Admin Role Distribution
            </h2>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            innerRadius={60}
                            paddingAngle={5}
                            animationBegin={0}
                            animationDuration={1000}
                            animationEasing="ease-out"
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                                borderRadius: '5px',
                                padding: '10px',
                                color: '#fff',
                                fontWeight: 'bold',
                            }}
                            labelStyle={{ color: '#fff' }}
                            itemStyle={{ color: '#fff' }}
                        />
                        <Legend
                            verticalAlign="top"
                            align="center"
                            layout="horizontal"
                            iconType="circle"
                            wrapperStyle={{ paddingTop: 10 }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export const ActiveInactiveUserDistribution = ({ users }) => {
    // Separate active and inactive users
    const activeUsers = users.filter((user) => user.status === 'ACTIVE');
    const inactiveUsers = users.filter((user) => user.status === 'INACTIVE');

    // Prepare data for the active vs inactive pie chart
    const data = [
        { name: 'Active Users', value: activeUsers.length },
        { name: 'Inactive Users', value: inactiveUsers.length },
    ];

    const COLORS = ['#36A2EB', '#FF6384'];

    return (
        <div className="mb-6 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
                Active vs Inactive Users Distribution
            </h2>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            innerRadius={60}
                            paddingAngle={5}
                            animationBegin={0}
                            animationDuration={1000}
                            animationEasing="ease-out"
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                                borderRadius: '5px',
                                padding: '10px',
                                color: '#fff',
                                fontWeight: 'bold',
                            }}
                            labelStyle={{ color: '#fff' }}
                            itemStyle={{ color: '#fff' }}
                        />
                        <Legend
                            verticalAlign="top"
                            align="center"
                            layout="horizontal"
                            iconType="circle"
                            wrapperStyle={{ paddingTop: 10 }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

