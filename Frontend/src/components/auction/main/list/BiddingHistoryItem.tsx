import React from 'react'

import { Avatar } from 'primereact/avatar'

import styles from "components/auction/main/list/BiddingHistoryItem.module.css"

interface BiddingHistoryItemProps{
    history:{
        nickname: string,
        SSF: number,
        time: string
    }
}

const BiddingHistoryItem: React.FC<BiddingHistoryItemProps> = ({history}) => {
    return (
    <div className={styles.wraper}>
        <div className={styles.userInfo}>
            <Avatar icon="pi pi-user" shape="circle" className={styles.avatar} />
            <p>{history.nickname}</p>
        </div>
        <div className={styles.price}>
            {history.SSF}
        </div>
        <div className={styles.time}>
            {history.time}
        </div>
    </div>
    )
}

export default BiddingHistoryItem