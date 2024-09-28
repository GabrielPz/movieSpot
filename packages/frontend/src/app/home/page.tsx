import { Login as LoginScreen } from "../../modules/login/screens/main";
import { Home as HomeScreen } from "@/modules/home/screens/main";

export default function Login() {
  const traceUrl = process.env.TRACE_SITE_URL || "";
  const bbchainUrl = process.env.BBCHAIN_SITE_URL || "";
  return <HomeScreen />;
}
