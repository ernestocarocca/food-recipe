
import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import NumberDisplay from "./number";
const chartData = [{ month: "january", result: 5, total: 30, color: "hsl(var(--white--result))" }];
const chartConfig = {
    result: {
        label: "total",
        color: "hsl(var(--chart-1))",
    },
    total: {
        label: "result",
        color: "hsl(var(--chart-2))",
    },

} satisfies ChartConfig



export function ChartResult() {
   
      const totalVisitors = chartData[0].total + chartData[0].result
      const kiloResult = chartData[0].result
      const kiloToGoal= chartData[0].total - chartData[0].result

        return (
            <Card className="flex flex-col w-[30%]">
                <CardHeader className="items-center pb-0">
                    <CardTitle>Mål och result</CardTitle>
                    <CardDescription>January - december 2024</CardDescription>
                  
                </CardHeader>
             
                <div className=" flex justify-center items-center flex-col mt-10 h-full"> 
                    <h1 className=" flex justify-center items-center font-extrabold mt-10 w-full mb-5">Kilo Kvar</h1>
                    <NumberDisplay number={kiloToGoal} /></div>
                <CardContent className="flex flex-1 items-center pb-10 ">
                    
                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square w-full max-w-[250px]  "
                    >
                 
                        
                        <RadialBarChart
                            data={chartData}
                            endAngle={180}
                            innerRadius={80}
                            outerRadius={130}
                            
                        >
                            
                            
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                                <Label 
                                fill="white"
                                    content={({ viewBox }) => {
                                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                            return (
                                                <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" fill="white">
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={(viewBox.cy || 0) -20}
                                                        className="fill-muted-foreground"
                                                    >
                                                        Kilo
                                                    </tspan>
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={(viewBox.cy || 0) + 8}
                                                        className="text-2xl font-bold  text-white "
                                                    >
                                                        {kiloResult.toLocaleString()}
                                                    </tspan>
                                                    
                                                  
                                                </text>
                                            )
                                        }
                                    }}
                                />
                            </PolarRadiusAxis>
                            <RadialBar
                                dataKey="result"
                                stackId="a"
                                cornerRadius={5}
                                fill="green"
                                className="stroke-transparent stroke-2  text-white"
                            />
                            <RadialBar
                                dataKey="total"
                                fill="red"
                                stackId="a"
                                cornerRadius={5}
                                className=" stroke-2 text-white"
                            />
                            
                        </RadialBarChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col gap-2 text-sm ">
                    <div className="flex items-center gap-2 font-medium leading-none">
                        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="leading-none text-muted-foreground">
                        Showing total visitors for the last 6 months
                    </div>
                </CardFooter>
            </Card>
        )
    }
