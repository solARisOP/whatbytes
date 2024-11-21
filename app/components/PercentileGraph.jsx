import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';

const PercentileGraph = () => {
    const myPercentile = useSelector(state => state.user.percentile)

    const [data, setData] = useState(
        [{ percentile: 0, students: 2 },
        { percentile: 20, students: 4 },
        { percentile: 50, students: 14 },
        { percentile: 75, students: 1 },
        { percentile: 78, students: 1 },
        { percentile: 100, students: 28 }])

    useEffect(() => {
        setData(arr => {
            let flag = true
            let newArr = arr.map(x => {
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
    console.log(data);

    return (
        <LineChart width={600} height={400} data={data}>
            <XAxis dataKey="percentile" type="number" domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} label={{
                value: 'percentile',
                position: 'bottom'
            }} />
            <YAxis ticks={[0, 10, 20, 30, 40]} label={{
                value: 'Number of Students',
                angle: -90,
                position: 'insideLeft',
            }} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="students" stroke="#8884d8" />
            <ReferenceLine x={myPercentile} stroke="#a5cbfc" label="your Percentile" />
        </LineChart>
    );
};

export default PercentileGraph;


