import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<Menu />
            <Header />
            <hr />
            <Routing />
        </div>
    );
}

export default Layout;
