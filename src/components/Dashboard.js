import React from 'react'; 
import "../styles/Dashboard.scss"
function Dashboard(){
    return(
        <div>
           <nav className = 'nav'> 
               <a href ><svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.13672 0.692773C9.05469 0.627148 8.94531 0.627148 8.86328 0.692773L0.332031 7.51777C0.282813 7.56152 0.25 7.62168 0.25 7.6873V20.2654C0.25 20.3256 0.299219 20.3748 0.359375 20.3748H6.26562C6.32578 20.3748 6.375 20.3256 6.375 20.2654V12.6092C6.375 12.549 6.42422 12.4998 6.48438 12.4998H11.5156C11.5758 12.4998 11.625 12.549 11.625 12.6092V20.2654C11.625 20.3256 11.6742 20.3748 11.7344 20.3748H17.6406C17.7008 20.3748 17.75 20.3256 17.75 20.2654V7.6873C17.75 7.62168 17.7172 7.55605 17.668 7.51777L9.13672 0.692773Z" fill="#007AFF"/>
</svg> Home</a>
               <a href><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0.625H11.9617C8.93203 0.635937 6.08828 1.82266 3.94453 3.96641C1.80625 6.11562 0.625 8.96484 0.625 12C0.625 15.0352 1.80625 17.8844 3.95 20.0336C6.08828 22.1773 8.9375 23.3641 11.9672 23.375H12.0055C18.2781 23.375 23.3805 18.2727 23.3805 12C23.3805 5.72734 18.2727 0.625 12 0.625ZM21.8547 11.2344H17.6109C17.5617 9.77422 17.3812 8.37969 17.075 7.06719C18.0102 6.76641 18.918 6.38359 19.793 5.91875C20.9961 7.46094 21.707 9.2875 21.8547 11.2344ZM11.2344 11.2344H7.85469C7.89844 9.89453 8.0625 8.62578 8.33594 7.45547C9.2875 7.66875 10.2555 7.8 11.2344 7.84375V11.2344ZM11.2344 12.7656V16.1508C10.2609 16.1945 9.2875 16.3258 8.33594 16.5391C8.0625 15.3687 7.89844 14.1 7.85469 12.7656H11.2344ZM12.7656 12.7656H16.118C16.0742 14.1 15.9102 15.3687 15.6367 16.5336C14.6961 16.3203 13.7336 16.1945 12.7656 16.1508V12.7656ZM12.7656 11.2344V7.84375C13.7391 7.8 14.7016 7.66875 15.6367 7.46094C15.9102 8.63125 16.0742 9.89453 16.118 11.2344H12.7656ZM18.7484 4.78672C18.0758 5.12031 17.3813 5.40469 16.6703 5.63438C16.282 4.46406 15.7898 3.45234 15.2211 2.65391C16.5336 3.10781 17.7312 3.83516 18.7484 4.78672ZM15.2266 6.02813C14.4227 6.20312 13.5969 6.3125 12.7656 6.35625V2.34219C13.6953 2.84531 14.6031 4.19609 15.2266 6.02813ZM11.2344 2.32031V6.35078C10.3922 6.30703 9.56094 6.19766 8.74609 6.01719C9.38047 4.16875 10.2992 2.81797 11.2344 2.32031ZM8.74062 2.67031C8.17734 3.46328 7.69063 4.46953 7.30234 5.62891C6.60234 5.39922 5.91328 5.11484 5.25156 4.78672C6.25781 3.84063 7.44453 3.11875 8.74062 2.67031ZM4.20703 5.92422C5.07109 6.38359 5.97344 6.76641 6.89766 7.06172C6.58594 8.36875 6.40547 9.76875 6.36172 11.2289H2.15078C2.29297 9.29297 3.00391 7.46641 4.20703 5.92422ZM2.14531 12.7656H6.35625C6.40547 14.2258 6.58594 15.6258 6.89219 16.9328C5.96797 17.2336 5.06563 17.6164 4.20156 18.0703C3.00391 16.5336 2.29297 14.707 2.14531 12.7656ZM5.24609 19.2133C5.90781 18.8852 6.59688 18.6008 7.30234 18.3711C7.69063 19.5359 8.17734 20.5367 8.74062 21.3352C7.44453 20.8758 6.25781 20.1594 5.24609 19.2133ZM8.74609 17.9773C9.56094 17.7969 10.3977 17.6875 11.2344 17.6438V21.6797C10.2937 21.182 9.38047 19.8258 8.74609 17.9773ZM12.7656 21.6578V17.6383C13.5969 17.682 14.4227 17.7914 15.2266 17.9664C14.6031 19.8039 13.6953 21.1547 12.7656 21.6578ZM15.2266 21.3461C15.7953 20.5477 16.2875 19.5359 16.6758 18.3656C17.3867 18.5953 18.0867 18.8852 18.7539 19.2188C17.7367 20.1648 16.5336 20.8922 15.2266 21.3461ZM19.793 18.0758C18.918 17.6109 18.0102 17.2281 17.075 16.9273C17.3812 15.6203 17.5617 14.2258 17.6109 12.7656H21.8547C21.707 14.707 21.0016 16.5336 19.793 18.0758Z" fill="#007AFF"/>
</svg>
   Nation Watch</a>
               <a href><svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#007AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Market Watch</a>
               <a href><svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.375 21.5H21.625C22.593 21.5 23.375 20.718 23.375 19.75V9.25H0.625V19.75C0.625 20.718 1.40703 21.5 2.375 21.5ZM21.625 4H21.1875V3.5625C21.1875 3.32188 20.9906 3.125 20.75 3.125H19C18.7594 3.125 18.5625 3.32188 18.5625 3.5625V4H17.0312V2.25C17.0312 1.2875 16.2437 0.5 15.2812 0.5H8.71875C7.75625 0.5 6.96875 1.2875 6.96875 2.25V4H5.4375V3.5625C5.4375 3.32188 5.24062 3.125 5 3.125H3.25C3.00938 3.125 2.8125 3.32188 2.8125 3.5625V4H2.375C1.40703 4 0.625 4.78203 0.625 5.75V7.9375H23.375V5.75C23.375 4.78203 22.593 4 21.625 4ZM15.5 4H8.5V2.46875C8.5 2.22812 8.69687 2.03125 8.9375 2.03125H15.0625C15.3031 2.03125 15.5 2.22812 15.5 2.46875V4Z" fill="#007AFF"/>
</svg>
 Reports</a>
            
            </nav>
        </div>
    )
}

export default Dashboard; 