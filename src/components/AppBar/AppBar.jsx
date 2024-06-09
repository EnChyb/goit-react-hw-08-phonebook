import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "../../hooks/useAuth"

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <div>
            <header>
                <Navigation />
                {isLoggedIn ? <UserMenu/> : <AuthNav/>}
            </header>
        </div>
    )

}