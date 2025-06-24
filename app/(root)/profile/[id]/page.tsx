import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";
const Page = async ({ params }: ParamsWithSearch) => {
  const userName = "Kazi Amin";
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        subHeader="adrian@jsmastery.pro"
        title={userName}
        userImg="/assets/images/dummy.jpg"
      />
      <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard {...card} key={card.id} />
        ))}
      </section>
    </div>
  );
};

export default Page;
