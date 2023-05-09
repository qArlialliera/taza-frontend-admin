import React from 'react'
import { motion } from "framer-motion"
import s from './Wellcome.module.css'

const manVar = {
    initial: {
         pathLength: 0, 
         rotate: 0,
         x: 0, y: 0},
    visible: {
        pathLength: 1,
        rotate: 30,
        x: 5, y: 28,
        transition: { duration: 3, repeat: Infinity, repeatType: "reverse"}
    },
    exit: {
        pathLength: 3, 
        rotate: 0,
        x: 0, y: 0
    }
}

export const Wellcome_man = () => {
    return (
        <div className={s.man_Svg}>
            <svg height="601" width="340" viewBox="0 0 340 781" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_96_1176)">
                    <motion.path d="M150.334 25.9804C150.334 18.0001 146.059 10.9952 139.291 6.1183C130.207 -0.531966 118.094 -1.77335 107.674 2.57149C78.5514 14.7193 63.5002 17.8228 66.8845 47.2613C67.686 54.5323 72.1391 60.8279 73.8312 67.9215C86.3888 122.276 141.339 112.523 147.662 83.9708C171.709 56.8377 150.334 57.3697 150.334 25.9804Z" fill="#FEEAFA" 
                     initial={{rotate: 0, x: 0, y: 0}} 
                     animate={{rotate: 30, x: 50, y: 30, transition:{duration:3,  repeat: Infinity, repeatType: "reverse"}}} />

                    <motion.path d="M125.843 16.67C122.725 16.5813 124.952 31.0346 122.28 32.7193C119.697 34.4041 113.463 16.4927 110.791 16.67C105.804 17.0247 116.313 36.7095 113.998 36.9755C111.682 37.2415 99.8369 17.468 96.8979 21.0149C93.9589 24.5617 111.415 40.2563 109.01 41.675C106.695 43.0938 94.137 25.6257 88.7043 27.7538C85.8544 28.9065 113.998 54.9756 113.552 59.1431C113.196 63.3992 96.8089 60.2071 95.6511 63.8426C94.5823 67.4781 125.754 67.1234 127.446 68.8081C129.138 70.4929 171.174 111.193 180.17 125.202C175.627 128.749 143.744 150.03 139.469 153.222C148.464 159.784 147.484 173.705 155.945 180.71C170.106 168.917 219.98 137.084 219 129.991C215.259 104.01 156.747 64.552 145.792 56.483C134.838 48.5026 135.283 41.675 130.563 35.2908C125.843 28.9952 128.96 16.67 125.843 16.67Z" fill="#F7A491" 
                    initial={{rotate: 0, x: 0, y: 0}} 
                    animate={{rotate: 30, x: 30, y: 50, transition:{duration:3,  repeat: Infinity, repeatType: "reverse"}}}/>

                    <motion.path d="M164.317 127.419C164.317 127.419 187.74 164.661 187.473 166.611C187.294 167.853 146.594 210.06 116.847 217.065C100.371 220.966 72.2281 190.641 74.1874 176.365C75.5233 166.523 164.317 127.419 164.317 127.419Z" fill="#2F3B50"
                     variants={manVar} initial="initial" animate="visible"/>
                
                    <path d="M25.2932 282.769C26.0057 285.252 26.451 286.05 27.3416 287.735C33.3086 298.464 47.024 313.804 47.024 313.804L57.7112 289.952C57.7112 289.952 56.0191 282.503 52.991 271.774C42.66 274.434 32.8633 275.942 25.2932 282.769Z" fill="#F8A492" />
                    <path d="M86.2997 262.109C86.2997 262.109 26.9853 287.558 25.115 287.026C23.8682 286.671 0.801491 248.277 0.534309 212.011C0.445251 195.341 17.8121 175.212 37.3163 179.203C47.113 181.242 46.9349 183.902 61.4518 204.917C75.8796 225.843 86.2997 262.109 86.2997 262.109Z" fill="#2F3B50" />
                    <path d="M136.886 717.874C136.886 717.874 135.461 741.017 135.461 741.106C134.927 744.032 132.878 751.303 132.878 753.963C132.878 763.983 180.793 745.451 170.106 741.017C169.126 740.574 164.05 737.559 163.693 734.101C163.159 728.87 161.912 718.14 161.912 718.14L136.886 717.874Z" fill="#F7A491" />
                    <path d="M170.017 740.929C170.017 740.929 158.795 744.032 153.006 744.742C147.217 745.54 139.647 739.067 135.55 740.752C131.097 742.702 131.275 759.993 131.275 759.993C131.275 759.993 191.658 764.958 208.58 759.816C215.348 757.865 192.994 748.111 170.017 740.929Z" fill="#CCACB3" />
                    <path d="M38.8304 717.874C38.8304 717.874 37.4055 741.017 37.4055 741.106C36.8711 744.032 34.8227 751.303 34.8227 753.963C34.8227 763.983 82.7373 745.451 72.05 741.017C71.0704 740.574 64.4799 735.254 64.1236 731.884C63.5893 726.653 63.8564 718.229 63.8564 718.229L38.8304 717.874Z" fill="#F7A491" />
                    <path d="M43.2835 141.34L37.8508 175.567C37.8508 175.567 58.6019 192.148 70.6251 188.602C80.778 185.676 73.8313 172.464 73.8313 172.464C73.8313 172.464 68.3986 154.198 70.0907 144.621C71.6938 135.134 43.2835 141.34 43.2835 141.34Z" fill="#F7A491" />
                    <path d="M47.2021 151.715C52.3676 154.198 62.6986 157.478 70.625 158.276C69.8235 153.488 69.4672 148.434 70.0906 144.71C70.8922 140.276 65.1923 139.212 58.869 139.39C50.5864 140.099 43.2834 141.34 43.2834 141.34L42.2147 147.902C43.8178 149.587 45.4209 150.917 47.2021 151.715Z" fill="#FE875E" />
                    <path d="M17.0996 101.882C16.209 101.882 25.2932 140.099 39.2757 146.661C53.2582 153.222 74.0984 149.853 78.0171 139.478C82.381 128.129 66.5283 89.1136 46.8459 84.1481C27.2525 79.2712 17.0996 101.882 17.0996 101.882Z" fill="#F7A491" />
                    <path d="M33.3086 66.7687C22.087 73.153 17.0105 82.7293 15.2293 86.6308C9.97476 89.1136 3.65146 94.4338 0.623398 108.887C-3.11715 126.621 10.2419 140.365 24.3135 144.444C38.4741 148.523 40.6116 157.833 40.6116 157.833L42.2147 147.813C42.2147 147.813 39.0976 139.124 34.3774 134.69C29.6571 130.345 36.6039 123.961 37.2273 118.818C37.6726 114.828 34.7336 107.025 35.357 100.552C35.357 100.552 43.1944 88.6702 50.9426 85.7441C64.1236 80.7786 47.6474 58.5224 33.3086 66.7687Z" fill="#FEEAFA" />
                    <path d="M49.6958 352.198C49.6958 352.198 41.5913 391.302 44.8865 421.006C48.1817 450.622 48.4489 556.051 48.4489 556.051L35.8023 724.613L65.8157 725.234C65.8157 725.234 101.351 556.761 100.727 561.105C100.104 565.45 112.662 442.465 112.662 442.465L70.1797 348.474L49.6958 352.198Z" fill="#CCACB3" />
                    <path d="M57.6222 350.336C57.6222 350.336 52.3676 385.538 58.9581 400.967C65.5486 416.396 115.779 567.933 116.402 580.347C117.026 592.672 133.769 729.313 133.769 729.313L168.592 728.337L176.162 576.445L160.398 385.627L145.08 337.302L57.6222 350.336Z" fill="#CCACB3" />
                    <path d="M37.8508 175.567C37.8508 175.567 46.4896 181.153 54.5051 180.533C62.5205 179.912 73.8312 172.552 73.8312 172.552L72.2281 167.232C72.2281 167.232 51.477 164.217 50.9427 164.572C50.4083 164.838 37.8508 175.567 37.8508 175.567Z" fill="#F7A491" />
                    <path d="M150.334 294.74C145.792 269.912 112.573 192.769 109.901 178.582C108.654 171.666 90.7527 171.488 73.6531 172.464C55.6629 173.439 37.7617 175.656 37.7617 175.656C37.7617 175.656 21.8198 178.227 14.784 184.789C7.74826 191.35 5.87799 209.439 16.0309 243.755C23.9573 270.888 33.843 285.784 38.7414 305.469C39.721 312.119 40.6116 318.592 41.6804 326.307C43.4616 355.834 80.2436 354.06 80.2436 354.06C80.2436 354.06 111.504 392.277 144.011 365.055C144.011 365.055 155.054 320.1 150.334 294.74Z" fill="#2F3B50" />
                    <path d="M14.8731 184.789C16.5653 183.193 18.8808 181.774 21.2855 180.621C9.88573 191.439 21.5527 243.932 23.9573 245.794C26.3619 247.656 64.1236 246.592 65.1033 242.336C66.9736 234.71 63.7674 222.651 60.6503 200.572C58.5128 185.676 62.1643 176.986 64.7471 172.996C67.6861 172.818 70.7141 172.552 73.7422 172.464C73.7422 172.464 56.4644 185.764 88.6153 276.385C91.2871 283.834 122.726 280.464 146.237 279.134C148.197 285.341 149.711 290.75 150.423 294.74C155.054 320.1 160.932 385.538 160.932 385.538C128.514 412.76 44.2631 395.292 44.2631 395.292C44.2631 395.292 43.4616 355.745 41.6804 326.218C40.5226 318.592 39.721 312.031 38.7414 305.38C33.843 285.607 23.9573 270.71 16.0309 243.666C5.96707 209.35 7.83734 191.262 14.8731 184.789Z" fill="#CCACB3" />
                    <path d="M42.2147 86.5422C42.2147 86.5422 38.1179 89.9116 39.632 95.0545C41.146 100.197 51.477 114.651 49.8739 121.212C48.2708 127.774 51.388 153.577 40.7007 157.833C40.7007 157.833 37.6726 141.961 37.0492 141.961C36.4258 141.961 28.5884 137.794 27.876 134.601C27.2525 131.321 27.2525 118.995 27.0744 118.552C26.9854 118.02 30.3697 90.5323 30.3697 90.5323L42.2147 86.5422Z" fill="#FEEAFA" />
                    <path d="M52.902 115.005C54.7723 119.439 53.9707 123.784 51.2099 124.759C48.449 125.734 44.7084 122.986 42.9272 118.552C41.0569 114.119 41.8585 109.774 44.6194 108.798C47.3802 107.823 51.1208 110.572 52.902 115.005Z" fill="#F7A491" />
                </g>
                <defs>
                    <clipPath id="clip0_96_1176">
                        <rect width="340" height="781" fill="white" transform="matrix(-1 0 0 1 340 0)" />
                    </clipPath>
                </defs>
            </svg>

        </div>
    )
}