export interface dailyReceivedTypes {
    day_1: boolean;
    day_2: boolean;
    day_3: boolean;
    day_4: boolean;
    day_5: boolean;
    day_6: boolean;
    day_7: boolean;
}
export interface dailyTaskTypes {
    day: Date;
    status: boolean;
}
export interface taskListTypes {
    status: boolean;
    earned: boolean;
}
export interface dailyCoinsStateTypes{
    _id: string;
    username: string;
    daily_coins_received_status: dailyReceivedTypes;
    retweet_status: dailyTaskTypes;
    comment_status: dailyTaskTypes;
    like_status: dailyTaskTypes;
    instagram_status: taskListTypes;
    youtube_status: taskListTypes;
    telegram_status: taskListTypes;
    error: object | string | null;
}
