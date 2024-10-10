import Landing from "@/src/components/modules/Home/Landing";
import RecentPost from "@/src/components/modules/Home/RecentPost";
import { Input } from "@nextui-org/input";

export default function Home() {
  return (
    <div>
      <Landing />
      <RecentPost />
    </div>
  );
}
