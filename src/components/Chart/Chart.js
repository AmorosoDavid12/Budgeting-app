import './Chart.css';
import ChartBar from './ChartBar';

const Chart =(props)=>{
    const ArrayValue = props.dataPoints.map(dataPoint => dataPoint.value);
   const totalMax = Math.max(...ArrayValue);
return <div className="chart">
    {props.dataPoints.map(dataPoint =>{
return <ChartBar 
key ={dataPoint.label}
value={dataPoint.value} 
maxValue={totalMax} 
label={dataPoint.label}/>

})}
</div>



};

export default Chart;