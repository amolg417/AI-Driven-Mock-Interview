import { cn } from "@/lib/utils";
import { Container } from "./container";
import { LogoContainer } from "./logo-container";
import { ProfileContainer } from "./profile-container";
import { ToggleContainer } from "./toggle-container";

const Header = () => {

  return (
    <header
      className={cn("w-full border-b duration-150 transition-all ease-in-out bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-100 dark:from-gray-800 dark:via-indigo-900 dark:to-purple-900")}
    >
      <Container>
        <div className="flex items-center gap-4 w-full ">
          {/* logo section */}
          <LogoContainer />
          <div className="ml-auto flex items-center gap-6">
            {/* profile section */}
            <ProfileContainer />

            {/* mobile toggle section */}
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
