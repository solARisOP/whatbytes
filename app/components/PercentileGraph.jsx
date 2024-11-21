import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine, ResponsiveContainer } from 'recharts';

const blob = [{ percentile: 0, students: 2 },
    { percentile: 20, students: 4 },
    { percentile: 50, students: 14 },
    { percentile: 75, students: 1 },
    { percentile: 78, students: 1 },
    { percentile: 100, students: 28 }]

const PercentileGraph = () => {
    const myPercentile = useSelector(state => state.user.percentile)
    const [data, setData] = useState(blob)

    useEffect(() => {
        setData(() => {
            let flag = true
            let newArr = blob.map(x => {
                if (x.percentile == myPercentile) {
                    x.students++;
                    flag = false;
                }
                return x;
            })
            if (flag)
            {
                flag=true
                for (let i = 0; i < newArr.length; i++) {
                    if(newArr[i].percentile>myPercentile) {
                        flag=false
                        newArr.splice(i, 0, {percentile: myPercentile, students: 1});
                        break;
                    }
                }
                if(flag) newArr.push({percentile: myPercentile, students: 1})
            }
            return newArr
        })
    }, [myPercentile])

    return (
        <ResponsiveContainer className="w-full" height={350}>
            <LineChart data={data}>
                <XAxis dataKey="percentile" type="number" domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} label={{
                    value: 'percentile',
                    position: 'bottom',
                    offset: -10
                }} />
                <Tooltip />
                <Line type="monotone" dataKey="students" stroke="#8884d8" />
                <ReferenceLine x={myPercentile} stroke="#a5cbfc" label="your Percentile" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default PercentileGraph;


