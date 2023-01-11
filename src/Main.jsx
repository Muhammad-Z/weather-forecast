import CardsContainer from "./CardsContainer";
import { HumadityChart } from "./HumadityChart";
import RainChart from "./RainChart";

export default function Main() {

  return (
    <main>
      <CardsContainer />

      {/*  <HistoryChart />
    <HumadityChart />
    <RainChart />
    <SomeChart />
    <DayTimeChart /> */}
      <RainChart />
      <HumadityChart />

    </main>
  )

}