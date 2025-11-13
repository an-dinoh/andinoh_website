import StatCard from "../ui/StatCard";
import SectionContainer from "../ui/SectionContainer";
import { UserIcon, CalendarIcon, CheckCircleIcon, StarIcon } from "../ui/icons";

export default function StatsSection() {
  return (
    <SectionContainer>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <StatCard icon={<UserIcon />} value="1.3k" label="Active users" />
        <StatCard icon={<CalendarIcon />} value="98%" label="User satisfaction" />
        <StatCard icon={<CheckCircleIcon />} value="14" label="Countries of operations" />
        <StatCard icon={<StarIcon />} value="43" label="Mentors" />
      </div>
    </SectionContainer>
  );
}
