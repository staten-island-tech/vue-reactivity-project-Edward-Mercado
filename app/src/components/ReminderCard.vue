<template>
    <div class="w-[230px] h-[400px]">
        <div class="badge badge-xl mb-[-15%]"> {{ getDateDifference(currentDate, reminder.dateDue) }} </div>
        <div class="min-w-[200px] w-[20%] min-h-[300px] h-[30%] bg-gradient-to-t from-cyan-300 to-cyan-200 rounded-box p-3 m-3 border-[4px] border-cyan-100 flex flex-col justify-between">
        <h2 class="funnel-sans-title text-2xl text-cyan-900">
            {{ reminder.reminderName }}
        </h2>
        <div>
            <h2 class="funnel-sans-title text-lg text-black">
            Due:
            </h2>
            <h2 class="funnel-sans-title text-2xl text-cyan-900">
                {{ reminder.dateDue.m }}/{{ reminder.dateDue.d }}/{{ reminder.dateDue.y }}
            </h2>
        </div>

        <div>
            <h2 class="funnel-sans-title text-lg text-black">
            Created:
            </h2>
            <h2 class="funnel-sans-title text-2xl text-cyan-900">
                {{ reminder.dateCreated.m }}/{{ reminder.dateCreated.d }}/{{ reminder.dateCreated.y }}
            </h2>
        </div>

        <div>
            <h2 class="funnel-sans-title text-lg text-black">
            Urgency Rating:
        </h2>
        <h2 class="funnel-sans-title text-2xl text-cyan-900">
            {{ reminder.urgency }}/100
        </h2>
        </div>
    </div>
    </div>
</template>

<script setup>
    defineProps({
        reminder: {
            type: Object,
            required: true
        }
    })

    let today = new Date()
    let currentDate = {
        y: today.getFullYear(),
        m: today.getMonth()+1,
        d: today.getDate(),
    }

    function dateToNum(date) { // pardon me this function is gonna be bad
      // i wrote the above comment before writing the function
      let yComponent = date.y.toString()
      let mComponent = date.m.toString()
      let dComponent = date.d.toString()

      if(date.m<10) {
        mComponent = "0" + mComponent
      }
      if(date.d<10) {
        dComponent = "0" + dComponent
      }
      return Number(`${yComponent}${mComponent}${dComponent}`)
    }

    function getDateDifference(currentDate, dateDue) {
        let currentNum = dateToNum(currentDate)
        let dueNum = dateToNum(dateDue)

        let result = dueNum - currentNum
        if(result < 0) {
            return "PAST DUE"
        } else if (result === 0) {
            return "DUE TODAY!"
        } else {
            return handleDifference(result, dateDue, currentDate)
        }
    }
    function handleDifference(result, dateDue, currentDate) {
        // year handling
        let yearDifference = Math.floor(result / 10000) // ten thousand = 1 year
        if(yearDifference === 1) { return "1 Year Remaining"} 
        else if (1 < yearDifference && yearDifference < 10) {return `${yearDifference} Years Remaining`} 
        else if (yearDifference >= 10) { return "You have time." }
    
        let monthDifference = dateDue.m - currentDate.m

        if(dateDue.d < currentDate.d) {
            monthDifference--
        }
        if(dateDue.y > currentDate.y) {
            monthDifference += 12
        }

        if(monthDifference === 1) { return "1 Month Remaining"} 
        else if (1 < monthDifference) {return `${monthDifference} Months Remaining`} 

        let previousMonthDays = {
            1: 31, 2: 31, 3: 28, 4: 31, 5: 30, 6: 31, 7:30, 8:31, 9:31, 10:30, 11:31, 12:30
        }

        if(currentDate.m === dateDue.m) {
            if((dateDue.d - currentDate.d) < 0) {
                return "PAST DUE"
            } else if ((dateDue.d - currentDate.d) === 0) {
                return "DUE TODAY"
            } else if ((dateDue.d - currentDate.d) === 1) {
                return "DUE TOMORROW"
            } else {
                return `${dateDue.d - currentDate.d} Days Remaining`
            }
        }
        else {
            let daysRemaining = previousMonthDays[dateDue.m] + (dateDue.d - currentDate.d)
            if(daysRemaining===1) {
                return "DUE TOMORROW"
            } else {
                return `${daysRemaining} Days Remaining`
            }
        }
    }

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300..800;1,300..800&display=swap');
.funnel-sans-title {
  font-family: "Funnel Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
}
</style>