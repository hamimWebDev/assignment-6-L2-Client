import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

const Landing = () => {
  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/images/banner-3.jpg')] bg-no-repeat bg-cover flex justify-center items-center">
      <div className="text-center text-gray-200">
        <h1 className="text-7xl font-semibold mb-10">recipe based community</h1>
        <p className="text-2xl font-semibold mb-10">
          You can post recipes and
          <br /> watch the process of making good recipes!
        </p>
        <br />
        <Button className="bg-gradient-to-r p-7">Create account</Button>
      </div>
    </div>
  );
};

export default Landing;
