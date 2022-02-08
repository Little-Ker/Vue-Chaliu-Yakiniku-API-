<template>
    <div class="calendar">
        <div class="d-flex justify-content-between">
            <p @click="clickMonthBtn(-1);" class="icon-left-open show-cursor-pointer" :class="{'hideOpcity':calendar.month == this.today.month} "></p>
            <p class="title text-center main-white-text align-self-center">{{calendar.year}}年 {{setZero(calendar.month + 1)}}月</p>
            <p @click="clickMonthBtn(1);" class="icon-right-open show-cursor-pointer" :class="{'hideOpcity':calendar.month == getNextMonth(this.today.month)}"></p>
        </div>
        <div class="weekDay d-flex w-100">
            <div class="day">
                <p>日</p><p class="dayEng">SUN</p>
            </div>
            <div class="day">
                <p>一</p><p class="dayEng">MON</p>
            </div>
            <div class="day">
                <p>二</p><p class="dayEng">TUS</p>
            </div>
            <div class="day">
                <p>三</p><p class="dayEng">WED</p>
            </div>
            <div class="day">
                <p>四</p><p class="dayEng">THU</p>
            </div>
            <div class="day">
                <p>五</p><p class="dayEng">FRI</p>
            </div>
            <div class="day">
                <p>六</p><p class="dayEng">SAT</p>
            </div>
        </div>
        <div class="week d-flex" v-for="i in getWeekCount" :key="i">
            <div @click="chooseDateFn(i, j, calendarMonth[(i-1)*7+j-1])" class="date"
             :class="{ today:setTodayClass(i, j), other:setOtherClass(i, j),
              canChooseDay:setCanChooseDayClass(i, j), notChooseDay:setNotChooseDayClass(i, j),
              chooseDay: calendarMonth[(i-1)*7+j-1].year === chooseDay.year && calendarMonth[(i-1)*7+j-1].month === chooseDay.month && calendarMonth[(i-1)*7+j-1].date === chooseDay.date,
            }" v-for="j in 7" :key="j">
                <p>{{calendarMonth[(i-1)*7+j-1].date}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Calendar',
    props: ["businessTime"],
    data() {
        return {
            today:{
                year:0,
                month:0,
                date:0,
                day:0
            },
            chooseDay:{
                year:0,
                month:0,
                date:0,
                day:0
            },
            calendar:{
                year:0,
                month:0,
                date:0,
                day:0
            },
        }
    },
    computed: {
        nowTime() {
            return this.$store.state.nowTime;
        },
        setCalendarData() {
            return function(i, j) {
                return this.calendarMonth[(i-1)*7+j-1];
            }
        },
        setTodayClass() {
            return function(i, j) {
                const calendar = this.setCalendarData(i, j);
                return calendar.year === this.today.year && calendar.month === this.today.month && calendar.date === this.today.date;
            }
        },
        setOtherClass() {
            return function(i, j) {
                const calendar = this.setCalendarData(i, j);
                return calendar.month !== this.calendar.month;
            }
        },
        setCanChooseDayClass() {
            return function(i, j) {
                if (this.setNotChooseDayClass(i, j)) return;
                const calendar = this.setCalendarData(i, j);
                const chooseDay = calendar.year === calendar.year && calendar.month === this.chooseDay.month && calendar.date === this.chooseDay.date;
                const canChooseday = !this.setNotChooseDayClass(i, j);
                return (canChooseday || chooseDay);
            }
        },
        setNotChooseDayClass() {
            return function(i, j) {
                const calendar = this.setCalendarData(i, j);
                // 星期一公休
                // if (calendar.day == 1) return true;

                if ((calendar.month != this.today.month) && (calendar.month != this.getNextMonth(this.today.month))) return true;

                const monthDate = (calendar.month == this.today.month && calendar.date < this.today.date);
                const nextMonthDate = (calendar.month == this.getNextMonth(this.today.month) && calendar.date >= this.today.date);
                return (monthDate || nextMonthDate);
            }
        },
        getWeekCount() {
            let chooseMonth = '';
            let monthCount = 0;
            this.calendarMonth.forEach(item => {
                if (chooseMonth === item.month || chooseMonth === '') monthCount++; 
                if (item.date === 1 && chooseMonth === '') chooseMonth = item.month;
            });
            monthCount = (monthCount / 7);
            if (monthCount % 1 !== 0) return (Math.trunc(monthCount) + 1);
            return monthCount;
        },
        setZero() {
            return function(num) {
                if (num < 10) {
                    return `0${num}`;
                } return num;
            }
        },
        setDay() {
            return function(day) {
                const weekAry = [  '日', '一', '二', '三', '四', '五', '六' ];
                return weekAry[day];
            }
        },
        setChooseDay() {
            return function(year, month, date, day) {
                return `${year}-${this.setZero(month + 1)}-${this.setZero(date)} 星期${this.setDay(day)}`;
            }
        },
        getNextMonth() {
            return function(month) {
                let nextMonth = month + 1;
                if (nextMonth > 11) nextMonth = 0;
                return nextMonth;
            }
        },
        calendarFirstDay(){
            const mDate = new Date(this.calendar.year,this.calendar.month,1)
            const date = new Date(this.calendar.year,this.calendar.month,1 - mDate.getDay())
            return {
                year:date.getFullYear(),
                month:date.getMonth(),
                date:date.getDate(),
                day:date.getDay(),
            }
        },
        calendarMonth() {
            const data = [];
            let date;
            for(let i = 0; i < 42; i++){
                date = new Date(this.calendarFirstDay.year,this.calendarFirstDay.month,this.calendarFirstDay.date + i)
                data.push({
                    year:date.getFullYear(),
                    month:date.getMonth(),
                    date:date.getDate(),
                    day:date.getDay()
                })
            }
            console.log(data);
            return data;
        }
    },
    methods: {
        sendChooseDate() {
            const chooseYear = this.chooseDay.year;
            const chooseMonth = this.chooseDay.month;
            const chooseDate = this.chooseDay.date;
            const chooseDay = this.chooseDay.day;
            this.$emit("chooseDate", this.chooseDay, this.setChooseDay(chooseYear, chooseMonth, chooseDate, chooseDay))
        },
        chooseDateFn(i, j, chooseDateData) {
            if(this.setNotChooseDayClass(i, j) || this.setOtherClass(i, j)) return;
            this.isSameDate();
            this.getNowTime();
            this.chooseDay.year = chooseDateData.year;
            this.chooseDay.month = chooseDateData.month;
            this.chooseDay.date = chooseDateData.date;
            this.chooseDay.day = chooseDateData.day;
            this.sendChooseDate();
        },
        getNowTime() {
            if (this.nowTime >= this.businessTime.close) {
                this.$store.dispatch('updateNowTime', (this.businessTime.open - 1));
                return 1;
            }
            return 0;
        },
        isSameDate() {
            if (this.today.date !== this.chooseDay.date) {
                this.$store.dispatch('updateNowTime', (this.businessTime.open - 1));
            }
        },
        setToday() {
            const addDay = this.getNowTime();
            const date = new Date(new Date().getTime() + addDay * 24 * 60 * 60 * 1000);
            this.today.year = this.calendar.year = date.getFullYear();
            this.today.month = this.calendar.month  = date.getMonth(); // 0~11月
            this.today.date = this.calendar.date  = date.getDate();
            this.today.day = this.calendar.day  = date.getDay();
        },
        getChooseDay() {
            for (let i = 1; i < this.getWeekCount; i++) {
                for(let j = 1; j < 7; j++) {
                    if (this.setCanChooseDayClass(i, j)) {
                        const canDate = this.setCalendarData(i, j);
                        this.chooseDay.year = canDate.year;
                        this.chooseDay.month = canDate.month;
                        this.chooseDay.date = canDate.date;
                        this.chooseDay.day = canDate.day;
                        return;
                    }
                }
            }
        },
        changeYear(fix) {
            this.calendar.year += fix;
        },
        changeMonth(fix) {
            let month = this.calendar.month + fix;
            if(month > 11) {
                this.changeYear(1);
                this.calendar.month = 0;
            } else if (month < 0){
                this.changeYear(-1);
                this.calendar.month = 11;
            } else {
                this.calendar.month = month;
            }
        },
        clickMonthBtn(fix) {
            const todayMonth = this.calendar.month == this.today.month;
            if(fix < 0 && todayMonth) return;
            const nextMonth = this.calendar.month == this.getNextMonth(this.today.month);
            if(fix > 0 && nextMonth) return;
            
            this.changeMonth(fix);
        }
    },
    mounted() {
        this.setToday();
        this.getChooseDay();
        this.sendChooseDate();
    },
    watch: {
        nowTime() {
            this.getChooseDay();
            this.sendChooseDate();
            this.isSameDate();
        },
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";

.calendar {
    color: $main-white-text;
    .title {
        font-size:20px;
        letter-spacing: 3px;
        margin-bottom: 25px;
        font-family: 'Noto Serif TC', serif;
    }
    .weekDay,.week{
        display: flex;
        border-bottom: 1px solid #aaa;
        >div {
            flex: 1 1 0%;
            line-height: 30px;
        }
        p {
            text-align: center;
        }      
    }
    .weekDay {
        border-top: 1px solid #aaa;
        .day {
            font-family: 'Noto Serif TC', serif;
            margin: 13px 0 10px 0;
            line-height: 20px;
            .dayEng {
                font-size: 12px;
            }
        }
    }
    .week {
        .date {
            cursor: pointer;
            font-family: 'Noto Serif TC', serif;
            padding: 15px;
        }
    }
    .other{
        cursor: auto !important;
        opacity: 0;
    }
    .notChooseDay {
        cursor: auto !important;
        color: #555;
    }
    .canChooseDay:hover, .chooseDay {
        color: #fff;
        background-color: #d0d0d04d;
    }
    .today {
        display: flex;
        flex-direction: column;
        p {
            position: relative;
            &::before {
                content: '';
                position: absolute;
                bottom: -4px;
                left: calc(50% - 8px);
                width: 16px;
                height: 4px;
                background-color: $main-brow-text;
            }
        }
    }
}
</style>