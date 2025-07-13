
export interface Todo {
    id: number;           // 數字型別的 ID
    title: string;        // 字串型別的標題
    description?: string; // 可選的描述（? 表示可有可無）
    isCompleted: boolean; // 布林值（true/false）
    createdAt: string;    // 日期字串
    updatedAt?: string;   // 可選的更新時間
}

// export 表示其他檔案可以使用這個 interface