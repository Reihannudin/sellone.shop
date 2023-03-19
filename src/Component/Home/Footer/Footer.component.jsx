import React from "react";


export const Footer = () => {
    return(
        <>
            <footer className="w-full bg-white pb-4 pt-8">
                <div className="w-80 text-center  mx-auto">
                    <div className="w-80 mx-auto">
                        <div className="mx-auto" style={{ height: "30px" }}>
                            <img src="/assets/logo/logo-panjang.svg" className=" h-full mx-auto" alt="" />
                        </div>
                    </div>
                    <div className="my-5 w-80 mx-auto">
                        <div className="w-80 mx-10 text-center" style={{fontSize:"12px"}}>
                            <ul className="flex text-center gap-4 mx-auto">
                                <li className="text-center"><a className="text-center">Pusat Bantuan</a></li>
                                <li className="text-center"><a className="text-center">Hubungi Kami</a></li>
                                <li className="text-center"><a className="text-center">Berita</a></li>
                            </ul>
                            <ul className="flex text-center gap-4 mx-auto">
                                <li className="text-center"><a className="text-center">Menjadi Partner</a></li>
                                <li className="text-center"><a className="text-center">Berilklan dengan Kami</a></li>
                            </ul>
                            <ul className="flex text-center gap-4 mx-auto">
                                <li className="text-center"><a className="text-center">Persyaratan</a></li>
                                <li className="text-center"><a className="text-center">Privacy police</a></li>
                                <li className="text-center"><a className="text-center">Supports</a></li>
                            </ul>
                        </div>
                    </div>
                    <div  className="my-3 pb-4 w-80 mx-auto">
                        <div className="w-80 mx-auto">
                            <span className="text-center mx-auto" style={{fontSize:"12px"}}>@ 2023 All Rights Reserved by KagooTech x clHorizon</span>
                        </div>
                        <hr className="my-4" style={{color:"#ea1111" , background:"#ea1111"}}/>
                    </div>
                </div>
            </footer>
        </>
    )
}