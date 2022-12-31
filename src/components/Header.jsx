import React from 'react'
import classes from '../styles/Header.module.css'
import userpic from '../images/Userpic.jpg'

export default function Header() {
  return (
    <header>
      <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6364 3H1.36364C0.61 3 0 2.328 0 1.5C0 0.672 0.61 0 1.36364 0H18.6364C19.3891 0 20 0.672 20 1.5C20 2.328 19.3891 3 18.6364 3ZM1.36364 7H18.6364C19.3891 7 20 7.672 20 8.5C20 9.328 19.3891 10 18.6364 10H1.36364C0.61 10 0 9.328 0 8.5C0 7.672 0.61 7 1.36364 7ZM18.6364 14H1.36364C0.61 14 0 14.672 0 15.5C0 16.328 0.61 17 1.36364 17H18.6364C19.3891 17 20 16.328 20 15.5C20 14.672 19.3891 14 18.6364 14Z" fill="#1F2022"/>
      </svg>
      <div className={classes.logo}>
        <svg width="37" height="25" viewBox="0 0 37 25" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6148 24.8219L19.132 24.9575C19.144 24.9575 19.1679 24.9575 19.1679 24.9752C23.354 25.0518 27.4326 24.8101 31.6068 24.5094C34.9378 24.2794 35.7272 21.8974 36.1398 19.0554C36.6541 15.6238 36.7677 12.1509 36.4986 8.69571C36.4858 8.53257 36.4733 8.36796 36.4608 8.20233C36.2106 4.89591 35.9293 1.17908 31.9656 0.494059C31.1224 0.346653 30.2612 0.216936 29.406 0.193351C21.3088 -0.0660825 13.1398 -0.130941 5.02461 0.423304C2.62056 0.576606 1.06569 1.97991 0.670997 4.3325C-0.0286908 8.52472 -0.172217 12.829 0.198558 17.0566C0.203186 17.1083 0.20781 17.1601 0.212447 17.2122C0.47751 20.1861 0.787238 23.6611 4.35482 24.3797C6.2755 24.7736 8.23105 24.7893 10.1903 24.8051C10.6651 24.8089 11.1401 24.8127 11.6148 24.8219ZM18.6708 15.5219C17.3569 16.2664 16.0401 17.0126 14.7126 17.7641V7.16269C16.1423 7.97128 17.562 8.77616 18.9832 9.58186C20.671 10.5387 22.3607 11.4967 24.0717 12.4634C22.2639 13.4858 20.4702 14.5022 18.6708 15.5219Z" fill="#FF0000"/>
        </svg>

        <svg className={classes.youtube} width="75" height="24" viewBox="0 0 75 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M56.7243 22.7469L56.7245 22.7464C56.8082 22.4308 56.8946 22.1052 56.9887 21.7264C57.0615 21.8263 57.1196 21.9084 57.1698 21.9795L57.1699 21.9796C57.2353 22.072 57.2874 22.1458 57.3415 22.2158C58.9024 24.2382 62.048 23.8844 63.0108 21.5495C63.3038 20.8419 63.5371 20.0695 63.5729 19.3148C63.6626 16.8443 63.6985 14.3797 63.6507 11.9092C63.6268 10.9481 63.4294 9.9634 63.1244 9.04359C62.652 7.56364 61.3184 6.88557 59.7575 7.18628C58.7768 7.38675 58.0173 7.90562 57.4312 8.70161C57.3963 8.74668 57.3589 8.79056 57.312 8.84558L57.3119 8.84568C57.2546 8.913 57.1831 8.997 57.0844 9.12024V0.865524H53.6517V23.2417H56.594C56.6372 23.0754 56.6804 22.9125 56.7243 22.7469ZM57.1561 19.6627V15.5707V11.4787C57.1561 10.7889 57.491 10.27 58.0412 9.90444C58.7708 9.42685 59.5124 9.66859 59.7815 10.4882C59.925 10.9422 60.0386 11.4257 60.0386 11.8915C60.0207 14.3974 59.9609 16.8974 59.8951 19.3974C59.8891 19.6627 59.7755 19.928 59.6619 20.1816C59.3927 20.7889 58.8545 21.0424 58.1907 20.8891C57.515 20.7358 57.1561 20.329 57.1561 19.6627ZM47.827 7.50468H51.4211V23.2535H48.6164C48.5242 22.7134 48.432 22.1588 48.3264 21.5237L48.3263 21.5234L48.2934 21.3254C48.169 21.5056 48.0775 21.6433 47.9958 21.7663L47.9958 21.7663L47.9955 21.7668L47.9951 21.7673C47.9514 21.8331 47.9105 21.8947 47.8688 21.9563C46.9359 23.283 45.6143 23.737 44.0534 23.4952C42.7198 23.283 41.9185 22.2688 41.7391 20.6061C41.6853 20.1108 41.6613 19.6096 41.6613 19.1143C41.6534 16.6571 41.656 14.1947 41.6587 11.734V11.7327V11.7314V11.7301V11.7288V11.7275V11.7262V11.7249C41.66 10.4982 41.6613 9.27202 41.6613 8.04713V7.49288H45.2973V8.13557C45.2973 9.02601 45.2966 9.91609 45.2958 10.806C45.2936 13.4752 45.2913 16.1428 45.3093 18.8136C45.3093 19.3207 45.3631 19.8455 45.4528 20.3526C45.5545 20.8714 45.9372 21.0601 46.4515 21.0247C47.2828 20.9599 47.8569 20.3526 47.8569 19.5389V8.20043C47.827 7.97048 47.827 7.75821 47.827 7.50468ZM26.6928 7.49288H23.0807L23.0748 7.91741C23.0748 11.7441 23.0748 15.5884 23.0867 19.4151C23.0867 19.8926 23.1346 20.3643 23.2003 20.8419C23.4395 22.3691 24.223 23.3007 25.5027 23.4893C27.0995 23.7311 28.4091 23.2358 29.342 21.8856C29.4437 21.7264 29.5454 21.5731 29.7248 21.3077C29.7858 21.6603 29.8403 21.9786 29.8914 22.2768L29.8918 22.2789C29.9508 22.6233 30.0052 22.941 30.0597 23.2535H32.8524V7.51647H29.2583V8.22401V19.5035C29.2523 20.3231 28.756 20.8832 27.9367 20.9952C27.3446 21.0719 26.9978 20.8832 26.8602 20.2995C26.7526 19.8042 26.7048 19.2794 26.7048 18.7724C26.6868 16.1238 26.6891 13.472 26.6913 10.8168C26.6921 9.93127 26.6928 9.0454 26.6928 8.15916V7.49288ZM21.2269 15.9009C21.2173 16.3254 21.1924 16.75 21.1675 17.1745C21.1613 17.2806 21.1551 17.3868 21.1491 17.4929C21.1373 17.6299 21.126 17.7719 21.1144 17.9177C20.9911 19.4655 20.8336 21.4431 19.6421 22.5047C18.8108 23.2358 17.7583 23.5011 16.6699 23.5365C16.1855 23.5483 15.6951 23.5483 15.2107 23.4834C12.9203 23.1415 11.8558 22.145 11.4731 19.6627C11.0365 16.7971 11.0007 13.8844 11.5209 11.0188C12.0592 8.05302 13.913 7.0035 16.7955 7.19807C19.4866 7.38675 20.6886 9.12614 21.0056 11.6026C21.179 13.0235 21.2627 14.4622 21.2269 15.9009ZM17.5709 14.4937C17.5689 14.7822 17.567 15.0706 17.567 15.3584C17.567 16.2923 17.5304 17.2261 17.4939 18.158L17.4939 18.1581L17.4939 18.1583L17.4939 18.1584L17.4939 18.1586C17.4772 18.5857 17.4605 19.0125 17.4473 19.4386C17.4473 19.7806 17.3277 20.1285 17.1902 20.4469C17.0168 20.8596 16.7058 21.0896 16.2334 21.0896C15.749 21.0896 15.3782 20.8537 15.2347 20.4233C14.8622 19.3124 14.9023 18.1173 14.9418 16.9389C14.9524 16.6225 14.963 16.3073 14.9656 15.9952C14.9775 14.4151 14.9895 12.829 14.9895 11.2488C14.9895 11.0321 15.0532 10.8101 15.1156 10.5928L15.127 10.553C15.3184 9.93392 15.6892 9.61552 16.2154 9.60373C16.7536 9.59194 17.1842 9.91034 17.3277 10.5766C17.4533 11.1544 17.5311 11.7441 17.555 12.3278C17.5806 13.0482 17.5757 13.7716 17.5709 14.4937ZM6.45317 11.1582L6.45321 11.158L6.45323 11.1579C6.67975 10.0565 6.90363 8.96787 7.1434 7.87614C7.33504 6.99163 7.537 6.10712 7.7391 5.22202L7.73911 5.222C7.97215 4.20135 8.20538 3.17992 8.42317 2.1568C8.52483 1.691 8.7162 1.57897 9.16472 1.59076C9.84938 1.61592 10.5431 1.61126 11.2567 1.60647C11.5466 1.60452 11.8397 1.60255 12.1369 1.60255C11.8295 2.71763 11.527 3.78302 11.2297 4.83065L11.2297 4.83071L11.2297 4.83073L11.2296 4.83081L11.1502 5.11081C10.1275 8.68392 9.10492 12.2688 8.09426 15.8537C8.01651 16.1309 7.98063 16.4316 7.98063 16.7264C7.97266 18.0312 7.97531 19.3334 7.97797 20.6364V20.6365V20.6365V20.6366C7.9793 21.2884 7.98063 21.9404 7.98063 22.5931V23.2299H4.47023C4.46624 23.1709 4.46093 23.112 4.45561 23.053C4.44498 22.9351 4.43435 22.8172 4.43435 22.6993C4.43435 22.3453 4.4252 21.9908 4.41606 21.6364C4.39658 20.8809 4.37711 20.1262 4.44631 19.3797C4.67078 17.079 4.05223 14.94 3.43394 12.802C3.34393 12.4908 3.25393 12.1796 3.16654 11.8679C2.71204 10.2464 2.25455 8.62202 1.79707 6.99761C1.33958 5.3732 0.882089 3.74878 0.427589 2.12732C0.400806 2.04149 0.383394 1.95198 0.364861 1.85669C0.350289 1.78177 0.335024 1.70329 0.313965 1.62024H3.89613C4.64964 5.19925 5.40913 8.77826 6.19852 12.3926C6.2844 11.9788 6.36897 11.5677 6.45317 11.1582ZM68.8296 16.5023H74.8816C74.8816 15.7716 74.8879 15.0609 74.8942 14.3598C74.9015 13.5392 74.9087 12.7318 74.9055 11.9209C74.8816 11.2665 74.7679 10.6061 74.6125 9.9634C74.2716 8.59548 73.4882 7.55184 72.017 7.29831C71.108 7.14501 70.1572 7.10963 69.2362 7.19807C67.5438 7.36317 66.4494 8.34784 65.9471 9.95161C65.8215 10.3408 65.7079 10.724 65.6421 11.125C65.2713 13.5306 65.3371 15.954 65.5165 18.3537C65.5823 19.3266 65.8873 20.2995 66.2102 21.2311C66.5571 22.2276 67.3285 22.8761 68.3631 23.1768C69.7625 23.5837 71.1678 23.5837 72.5373 23.053C74.2776 22.3867 75.3121 20.2287 74.738 18.5483C74.0445 18.5193 73.3451 18.4816 72.6357 18.4433L72.6346 18.4432L72.634 18.4432C72.3346 18.427 72.0333 18.4107 71.73 18.395L71.7244 18.4976L71.7244 18.498L71.7244 18.4985C71.7093 18.7781 71.6975 18.9975 71.6762 19.2028C71.6522 19.4622 71.6164 19.7158 71.5625 19.9693C71.3951 20.7476 70.9765 21.1014 70.2588 21.0896C69.5711 21.0837 69.1346 20.7476 69.0449 19.9634C68.9541 19.1492 68.9164 18.3288 68.8776 17.4845L68.8776 17.484L68.8776 17.4836C68.8628 17.1604 68.8478 16.8336 68.8296 16.5023ZM71.4429 14.4327C71.4429 14.1332 71.4437 13.8381 71.4445 13.5463C71.4467 12.6838 71.4488 11.85 71.431 11.0129C71.431 10.7476 71.3293 10.4705 71.2276 10.2169C71.0243 9.72166 70.5997 9.58604 70.0914 9.58604C69.5831 9.58604 69.2601 9.83958 69.1346 10.2936C68.8219 11.4063 68.8485 12.5386 68.8752 13.6778C68.8812 13.9331 68.8872 14.1887 68.8894 14.4445C69.8043 14.4327 70.6356 14.4327 71.4429 14.4327ZM32.069 4.4917H35.6273L35.6333 23.2299H39.1556V4.47401H42.6899V1.64972H32.069V4.4917Z" fill="black"/>
        </svg>
      </div>
      <div className={classes.searchInput}>
        <input type="text" className={classes.inputField} placeholder='Search'/>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6986 16.3006L14.159 12.761L14.158 12.76C16.7188 9.46107 16.2738 4.7398 13.1417 1.97751C10.0096 -0.784774 5.26972 -0.636239 2.31674 2.31674C-0.636239 5.26972 -0.784775 10.0096 1.97751 13.1417C4.7398 16.2737 9.46108 16.7188 12.76 14.158L16.2996 17.6976C16.5477 17.9548 16.9152 18.0582 17.2609 17.9679C17.6067 17.8777 17.8768 17.6079 17.9676 17.2623C18.0583 16.9167 17.9555 16.549 17.6986 16.3006ZM13.1962 11C12.1244 12.8564 10.1436 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C10.1436 2 12.1244 3.14359 13.1962 5C14.2679 6.85641 14.2679 9.14359 13.1962 11Z" fill="black"/>
        </svg>
      </div>
      <div className={classes.menu}>
        <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.24" fill-rule="evenodd" clip-rule="evenodd" d="M22.2082 2.86766L18.4091 5.68182V2.50266C18.4091 1.11814 17.3104 0 15.955 0H2.4541C1.09644 0 0 1.12048 0 2.50266V17.4973C0 18.8819 1.09874 20 2.4541 20H15.955C17.3126 20 18.4091 18.8795 18.4091 17.4973V14.3182L22.2082 17.1323C22.48 17.3336 22.9801 17.5 23.32 17.5H25.7691C26.456 17.5 27 16.939 27 16.2469V3.75309C27 3.06064 26.4489 2.5 25.7691 2.5H23.32C22.9732 2.5 22.4823 2.66461 22.2082 2.86766ZM2 18V3H16V18H2ZM5 14.5C5 13.6716 5.57668 13 6.28948 13H12.7105C13.4227 13 14 13.6658 14 14.5C14 15.3284 13.4233 16 12.7105 16H6.28948C5.57732 16 5 15.3342 5 14.5ZM22.9859 15L18 11.2394L18.0003 8.76398L22.9825 5L24 5.00157V14.999L22.9859 15Z" fill="black"/>
        </svg>
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.24" fill-rule="evenodd" clip-rule="evenodd" d="M0 2.5C0 3.88071 1.11929 5 2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5ZM2.5 13C1.11929 13 0 11.8807 0 10.5C0 9.11929 1.11929 8 2.5 8C3.88071 8 5 9.11929 5 10.5C5 11.8807 3.88071 13 2.5 13ZM2.5 21C1.11929 21 0 19.8807 0 18.5C0 17.1193 1.11929 16 2.5 16C3.88071 16 5 17.1193 5 18.5C5 19.8807 3.88071 21 2.5 21ZM10.5 21C9.11929 21 8 19.8807 8 18.5C8 17.1193 9.11929 16 10.5 16C11.8807 16 13 17.1193 13 18.5C13 19.8807 11.8807 21 10.5 21ZM16 18.5C16 19.8807 17.1193 21 18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5ZM10.5 13C9.11929 13 8 11.8807 8 10.5C8 9.11929 9.11929 8 10.5 8C11.8807 8 13 9.11929 13 10.5C13 11.8807 11.8807 13 10.5 13ZM8 2.5C8 3.88071 9.11929 5 10.5 5C11.8807 5 13 3.88071 13 2.5C13 1.11929 11.8807 0 10.5 0C9.11929 0 8 1.11929 8 2.5ZM18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13ZM16 2.5C16 3.88071 17.1193 5 18.5 5C19.8807 5 21 3.88071 21 2.5C21 1.11929 19.8807 0 18.5 0C17.1193 0 16 1.11929 16 2.5Z" fill="black"/>
        </svg>
        <div className={classes.ring}>
          <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.24" fill-rule="evenodd" clip-rule="evenodd" d="M3.66927 22.4545C1.64382 22.4545 0 20.8655 0 18.9091C0 17.6106 0.727122 16.4532 1.83849 15.835C1.83849 15.4764 1.83333 11.2256 1.83333 11.2256C1.83333 7.14185 4.66852 3.70365 8.55556 2.6765V2.36364C8.55556 1.05824 9.64997 0 11 0C12.35 0 13.4444 1.05824 13.4444 2.36364V2.6765C17.3323 3.70344 20.1667 7.14194 20.1667 11.2318V15.8454C21.2793 16.4664 22 17.619 22 18.9091C22 20.8681 20.3586 22.4545 18.3307 22.4545H14.6667C14.6646 24.413 13.0197 26 11 26C8.97496 26 7.33333 24.4143 7.33333 22.4571L3.66927 22.4545ZM10 22C10 22.5532 10.4472 23 11 23C11.5489 23 11.9983 22.5515 12 22H10ZM17.1786 11.3505V16.9263C17.1786 17.246 17.4468 17.5712 17.7705 17.6507L18.0889 17.7289C18.6202 17.8594 19 18.3188 19 18.8462C19 19.484 18.4568 20 17.7831 20H3.21687C2.54568 20 2 19.4816 2 18.8462C2 18.3165 2.37826 17.8589 2.90987 17.7289L3.23897 17.6484C3.56065 17.5697 3.82143 17.249 3.82143 16.9262V11.3445C3.82143 7.84026 6.81086 5 10.5 5C14.1906 5 17.1786 7.83931 17.1786 11.3505Z" fill="black"/>
          </svg>
          <span>3</span>
        </div>
        <img src={userpic} alt='userpic'></img>
      </div>
    </header>
  )
}
