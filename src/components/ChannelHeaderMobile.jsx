import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../styles/channelHeaderMobile.module.css';

export default function ChannelHeaderMobile() {
  return (
    <div className={classes.container}>
        <Link to={'/home'}>
            <div className={classes.logo}>
                <svg width="37" height="25" viewBox="0 0 37 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6148 24.8219L19.132 24.9575C19.144 24.9575 19.1679 24.9575 19.1679 24.9752C23.354 25.0518 27.4326 24.8101 31.6068 24.5094C34.9378 24.2794 35.7272 21.8974 36.1398 19.0554C36.6541 15.6238 36.7677 12.1509 36.4986 8.69571C36.4858 8.53257 36.4733 8.36796 36.4608 8.20233C36.2106 4.89591 35.9293 1.17908 31.9656 0.494059C31.1224 0.346653 30.2612 0.216936 29.406 0.193351C21.3088 -0.0660825 13.1398 -0.130941 5.02461 0.423304C2.62056 0.576606 1.06569 1.97991 0.670997 4.3325C-0.0286908 8.52472 -0.172217 12.829 0.198558 17.0566C0.203186 17.1083 0.20781 17.1601 0.212447 17.2122C0.47751 20.1861 0.787238 23.6611 4.35482 24.3797C6.2755 24.7736 8.23105 24.7893 10.1903 24.8051C10.6651 24.8089 11.1401 24.8127 11.6148 24.8219ZM18.6708 15.5219C17.3569 16.2664 16.0401 17.0126 14.7126 17.7641V7.16269C16.1423 7.97128 17.562 8.77616 18.9832 9.58186C20.671 10.5387 22.3607 11.4967 24.0717 12.4634C22.2639 13.4858 20.4702 14.5022 18.6708 15.5219Z" fill="#FF0000"/>
                </svg>
                <h2>Margaret Phelps</h2>
            </div>
        </Link>
        <div className={classes.searchBtn}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6986 16.3006L14.159 12.761L14.158 12.76C16.7188 9.46107 16.2738 4.7398 13.1417 1.97751C10.0096 -0.784774 5.26972 -0.636239 2.31674 2.31674C-0.636239 5.26972 -0.784775 10.0096 1.97751 13.1417C4.7398 16.2737 9.46108 16.7188 12.76 14.158L16.2996 17.6976C16.5477 17.9548 16.9152 18.0582 17.2609 17.9679C17.6067 17.8777 17.8768 17.6079 17.9676 17.2623C18.0583 16.9167 17.9555 16.549 17.6986 16.3006ZM13.1962 11C12.1244 12.8564 10.1436 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C10.1436 2 12.1244 3.14359 13.1962 5C14.2679 6.85641 14.2679 9.14359 13.1962 11Z" fill="black"/>
            </svg>
        </div>
        <div className={classes.dots}>
            <svg width="5" height="19" viewBox="0 0 5 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 0C3.88071 0 5 1.11929 5 2.5C5 3.88071 3.88071 5 2.5 5C1.11929 5 0 3.88071 0 2.5C0 1.11929 1.11929 0 2.5 0ZM5 9.5C5 8.11929 3.88071 7 2.5 7C1.11929 7 0 8.11929 0 9.5C0 10.8807 1.11929 12 2.5 12C3.88071 12 5 10.8807 5 9.5ZM5 16.5C5 15.1193 3.88071 14 2.5 14C1.11929 14 0 15.1193 0 16.5C0 17.8807 1.11929 19 2.5 19C3.88071 19 5 17.8807 5 16.5Z" fill="black"/>
            </svg>
        </div>
    </div>
  )
}
