import { Button } from "@/components/ui/button";

// const heading = "Task Overview";
// const buttonsData = [
//   { label: "+ New Task" },
//   { label: "All Task" },
//   { label: "View Hotel Page" },
// ];

export default function DashboardHeroCover({
  heading,
  buttonsData,
  children,
}: {
  heading: string;
  buttonsData: { label: string }[];
  children: React.ReactNode;
}) {
  const bgImage = "/images/dashboard/bg-3.png";

  return (
    <div
      className="px-10 py-10 md:py-6 space-y-8 rounded-3xl overflow-hidden shadow-lg bg-black/10"
      style={{
        backgroundImage: `linear-gradient(90deg, #B7D9FC 0%, #B7D9FC00 20%, #FFFFFF33 100%), url('${bgImage}')`,
        backgroundSize: "cover, cover",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "center, center",
      }}
    >
      
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
          {heading}
        </h1>
        <div className="flex gap-2">
          {buttonsData.map((button) => (
            <Button key={button.label} className="cursor-pointer font-semibold">
              {button.label}
            </Button>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}
