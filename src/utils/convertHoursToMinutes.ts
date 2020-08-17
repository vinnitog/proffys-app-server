export default function convertHoursToMinutes(time: string){
    //exemplo: 8:00 -> o 8 sera a primeira posicao e 0 a segunda e sera transformados em numericos
    const [hour, minutes] = time.split(':').map(Number);
    const timeInMinutes = (hour * 60) + minutes;
    return timeInMinutes;
}