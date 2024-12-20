/* eslint-disable react/prop-types */
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';

const RoleDistribution = ({ users }) => {
    const roleCounts = users.reduce((counts, user) => {
        counts[user.role] = (counts[user.role] || 0) + 1;
        return counts;
    }, {});

    const data = Object.keys(roleCounts).map((role) => ({
        name: role,
        value: roleCounts[role],
    }));

    const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];

    return (
        <div className="mb-6 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-primary text-3xl font-montserrat font-semibold mb-6 text-center">
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

export default RoleDistribution;
