import LineChart from "@/components/line-chart"

function BarChart() {
    return (
        <div>BarChart</div>
    )
}

function Dashboard() {
    return (
        <div>
            Dashboard
            <LineChart />
            <BarChart />
        </div>
    )
}

export default Dashboard