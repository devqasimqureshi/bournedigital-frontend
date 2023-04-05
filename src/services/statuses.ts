import { StatusType } from "interfaces/index";

const groups = {
    get: async () => {
        let statuses: StatusType[] = await new Promise(resolve => {
            setTimeout(() => {
                resolve([{
                    id: 1,
                    value: 1,
                    label: "Todo",
                }, {
                    id: 2,
                    value: 2,
                    label: "In Progress",
                }, {
                    id: 3,
                    value: 3,
                    label: "Completed",
                }])
            }, 500)
        })
        return statuses
    }
}

export default groups
