onmessage=(event)=>
{
  const[num1,num2]=event.data;
  const sum=Number(num1)+Number(num2);
  postMessage(sum);
}