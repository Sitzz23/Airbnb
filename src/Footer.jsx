import React from "react";
import Globe from "./assets/svg/globe.svg";
import Drawer from "./components/Drawer";

function Footer() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className=' text-sm first:w-screen border-t p-[14px] border-zinc-200 px-[5rem] flex justify-between font-light'>
            <div className='flex'>
                <div className='text-sm mr-5'>
                    © {new Date().getFullYear()} Windbnb, Inc.
                </div>
                <div className='flex gap-1 '>
                    <a href='https://www.airbnb.co.in/help/article/2855/airbnb-privacy'>
                        Privacy
                    </a>
                    <p>・</p>
                    <a href='https://www.airbnb.co.in/help/article/2908/terms-of-service'>
                        Terms
                    </a>
                    <p>・</p>
                    <a href='https://www.airbnb.co.in/sitemaps/v2'>Sitemap</a>
                    <p>・</p>
                    <a href='https://www.airbnb.co.in/about/company-details'>
                        Company Details
                    </a>
                    <p>・</p>
                    <button onClick={() => setIsOpen(true)}>
                        Destinations
                    </button>
                </div>
            </div>
            <div className='flex font-medium gap-5'>
                <div className='flex gap-2'>
                    <img src={Globe} width='18px' />
                    <p>English(IN)</p>
                </div>
                <p>₹ INR</p>
                <p>Support & Resources</p>
            </div>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <div>seorfnviuonr</div>
            </Drawer>
        </div>
    );
}

export default Footer;
