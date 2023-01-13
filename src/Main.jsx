import CardsContainer from "./CardsContainer";
import { HumadityChart } from "./HumadityChart";
import RainChart from "./RainChart";
import WindChart from "./WindChart";

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
      <WindChart />
      <HumadityChart />

    </main>
  )

}