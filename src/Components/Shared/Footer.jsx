import facebook from "../../assets/facebook.png"
import insta from "../../assets/instagram.png"
import tw from "../../assets/twitter.png"
const Footer = () => {
    return (
        <div className='pt-10 '>
            <div className='bg-green-900 '>
                <div className='text-center p-10 space-y-2'>
                    <h1 className='text-white text-3xl font-bold'>KeenKeeper</h1>
                    <p className='text-sm text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <p className='text-white '>Social Links</p>
                    <div className="flex gap-2 justify-center">
                        <img src={facebook} alt="" />
                        <img src={insta} alt="" />
                        <img src={tw} alt="" />
                    </div>
                    <div className="divider"></div>
                    <p className="text-center text-gray-400 text-sm">
                        © {new Date().getFullYear()} KeenKeeper. All rights reserved.
                    </p>

                </div>
            </div>

        </div>

    );
};

export default Footer;

