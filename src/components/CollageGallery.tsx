import { motion } from 'framer-motion';
import chef1 from '@/assets/collage/chef.png';
import chef2 from '@/assets/collage/chef2.png';
import chef3 from '@/assets/collage/chef3.png';
import chef4 from '@/assets/collage/chef4.png';
import collage2 from '@/assets/collage/collage2.png';
import collage4 from '@/assets/collage/collage4.png';
import collage5 from '@/assets/collage/collage5.png';
import collage8 from '@/assets/collage/collage8.png';
import collage9 from '@/assets/collage/collage9.png';
import collage11 from '@/assets/collage/collage11.png';
import collage12 from '@/assets/collage/collage12.png';
import collage13 from '@/assets/collage/collage13.png';
import collage14 from '@/assets/collage/collage14.png';
import collage15 from '@/assets/collage/collage15.png';

const CollageGallery = () => {
    return (
        <section className="py-20 bg-background overflow-hidden selection:bg-primary/30">
            {/* Main horizontal container with no gaps and a fixed height */}
            <div className="flex w-full h-[450px] md:h-[550px] lg:h-[650px] gap-0">

                {/* 1. Large Portrait Dish */}
                <div className="flex-[1.5] h-full overflow-hidden border-r-[1px] border-background/10">
                    <img src={collage14} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt="" />
                </div>

                {/* 2. Stacked: Pizza (Top) + Coffee (Bottom) */}
                <div className="flex-[1.8] flex flex-col h-full gap-0">
                    <div className="flex-1 overflow-hidden border-b-[1px] border-r-[1px] border-background/10">
                        <img src={collage2} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt="" />
                    </div>
                    <div className="flex-[2] overflow-hidden border-r-[1px] border-background/10">
                        <img src={collage15} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt="" />
                    </div>
                </div>

                {/* 3. Chef Man - Full Height */}
                <div className="flex-[1.8] h-full overflow-hidden border-r-[1px] border-background/10">
                    <img src={chef4} className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110" alt="Chef" />
                </div>

                {/* 4. Drinking Girl - Very Wide Full Height */}
                <div className="flex-[3.5] h-full overflow-hidden border-r-[1px] border-background/10">
                    <img src={collage5} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt="" />
                </div>

                {/* 5. Stacked: Drink (Top) + Mint Drink (Bottom) */}
                <div className="flex-[1.5] flex flex-col h-full gap-0">
                    <div className="flex-[2] overflow-hidden border-b-[1px] border-r-[1px] border-background/10">
                        <img src={collage13} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt="" />
                    </div>
                    <div className="flex-[1.5] overflow-hidden border-r-[1px] border-background/10">
                        <img src={collage11} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt="" />
                    </div>
                </div>

                {/* 6. Chef Woman - Full Height */}
                <div className="flex-[2.5] h-full overflow-hidden border-r-[1px] border-background/10">
                    <img src={chef1} className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110" alt="Chef Woman" />
                </div>

                {/* 7. Final mix: Stacked Details */}
                <div className="flex-[2] flex flex-col h-full gap-0">
                    <div className="flex-[1.5] flex gap-0 h-full">
                        <div className="flex-1 overflow-hidden border-b-[1px] border-r-[1px] border-background/10">
                            <img src={chef2} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt="" />
                        </div>
                        <div className="flex-1 overflow-hidden border-b-[1px] border-r-[1px] border-background/10">
                            <img src={collage4} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt="" />
                        </div>
                    </div>
                    <div className="flex-[1] flex gap-0 h-full">
                        <div className="flex-1 overflow-hidden border-r-[1px] border-background/10">
                            <img src={collage8} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt="" />
                        </div>
                        <div className="flex-1 overflow-hidden border-r-[1px] border-background/10">
                            <img src={chef3} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt="" />
                        </div>
                    </div>
                    <div className="flex-[1] flex gap-0 h-full">
                        <div className="flex-1 overflow-hidden border-t-[1px] border-r-[1px] border-background/10">
                            <img src={collage9} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt="" />
                        </div>
                        <div className="flex-1 overflow-hidden border-t-[1px] border-background/10">
                            <img src={collage12} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollageGallery;
