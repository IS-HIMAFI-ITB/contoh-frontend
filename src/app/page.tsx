import Competition_List from "@/components/competition-component";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex size-full min-h-screen flex-col gap-0 space-y-10 overflow-hidden pb-16">
      <div className="relative flex min-h-screen items-center  justify-center bg-stars ">
        <Competition_List />
      </div>
      <Footer />
    </main>
  );
}
