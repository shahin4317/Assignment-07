import Banner from '../../Components/Home/Banner';
import CardSummary from '../../Components/Home/CardSummary';
import FriendCard from '../../Components/Home/FriendCard';
import { useNavigation } from 'react-router';

const Home = () => {

    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        );
    }

    return (
        <div>
            <Banner />
            <CardSummary />
            <FriendCard />
        </div>
    );
};

export default Home;