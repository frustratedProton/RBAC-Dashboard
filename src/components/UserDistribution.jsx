/* eslint-disable react/prop-types */
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';

const UserDistribution = ({ users }) => {
    const activeUsers = users.filter((user) => user.status === 'ACTIVE');
    const inactiveUsers = users.filter((user) => user.status === 'INACTIVE');

    const data = [
        { name: 'Active Users', value: activeUsers.length },
        { name: 'Inactive Users', value: inactiveUsers.length },
    ];

    const COLORS = ['#36A2EB', '#FF6384'];

    return (
        <div className="mb-6 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-primary text-3xl font-montserrat font-semibold mb-6 text-center">
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

export default UserDistribution;
