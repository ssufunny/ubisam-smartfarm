// db에서 불러온 data를 활용하여 장비 수에 맞게 ui가 동적으로 적용되도록 하는 코드 작성(if문 이용)

var defaultCount = 8 // 장비 개수 default 값
var deviceCount = msg.payload[0].count // 각 장비 수
msg.count = deviceCount // 출력확인용

if (deviceCount == 1)   // 센서 수가 1개라면 센서1의 정보만 보여줌
    msg.payload={"group":{"hide":["자동개폐기(동)_센서2", "자동개폐기(동)_센서3", "자동개폐기(동)_센서4", "자동개폐기(동)_센서5", "자동개폐기(동)_센서6", "자동개폐기(동)_센서7", "자동개폐기(동)_센서8"],"show":["자동개폐기(동)_센서1"], "focus":true}}
else if (deviceCount == 2)  // 센서 수가 2개라면 센서1과 센서2의 정보를 보여줌
    msg.payload={"group":{"hide":["자동개폐기(동)_센서3", "자동개폐기(동)_센서4", "자동개폐기(동)_센서5", "자동개폐기(동)_센서6", "자동개폐기(동)_센서7", "자동개폐기(동)_센서8"],"show":["자동개폐기(동)_센서1", "자동개폐기(동)_센서2"], "focus":true}}
else if (deviceCount == 3)  // 센서 수가 3개라면 센서1, 센서2, 센서3의 정보를 보여줌
    msg.payload={"group":{"hide":["자동개폐기(동)_센서4", "자동개폐기(동)_센서5", "자동개폐기(동)_센서6", "자동개폐기(동)_센서7", "자동개폐기(동)_센서8"],"show":["자동개폐기(동)_센서1", "자동개폐기(동)_센서2", "자동개폐기(동)_센서3"], "focus":true}}
else if (deviceCount == 4)  // 센서 수가 4개라면 센서1, 센서2, 센서3, 센서4의 정보를 보여줌
    msg.payload={"group":{"hide":["자동개폐기(동)_센서5", "자동개폐기(동)_센서6", "자동개폐기(동)_센서7", "자동개폐기(동)_센서8"],"show":["자동개폐기(동)_센서1", "자동개폐기(동)_센서2", "자동개폐기(동)_센서3", "자동개폐기(동)_센서4"], "focus":true}}
else if (deviceCount == 5)  // 센서 수가 5개라면 센서1, 센서2, 센서3, 센서4, 센서5의 정보를 보여줌
    msg.payload={"group":{"hide":["자동개폐기(동)_센서6", "자동개폐기(동)_센서7", "자동개폐기(동)_센서8"],"show":["자동개폐기(동)_센서1", "자동개폐기(동)_센서2", "자동개폐기(동)_센서3", "자동개폐기(동)_센서4", "자동개폐기(동)_센서5"], "focus":true}}
else if (deviceCount == 6)  // 센서 수가 6개라면 센서1, 센서2, 센서3, 센서4, 센서5, 센서6의 정보를 보여줌
    msg.payload={"group":{"hide":["자동개폐기(동)_센서7", "자동개폐기(동)_센서8"],"show":["자동개폐기(동)_센서1", "자동개폐기(동)_센서2", "자동개폐기(동)_센서3", "자동개폐기(동)_센서4", "자동개폐기(동)_센서5", "자동개폐기(동)_센서6"], "focus":true}}
else if (deviceCount == 7)  // 센서 수가 7개라면 센서1, 센서2, 센서3, 센서4, 센서5, 센서6, 센서7의 정보를 보여줌
    msg.payload={"group":{"hide":["자동개폐기(동)_센서8"],"show":["자동개폐기(동)_센서1", "자동개폐기(동)_센서2", "자동개폐기(동)_센서3", "자동개폐기(동)_센서4", "자동개폐기(동)_센서5", "자동개폐기(동)_센서6", "자동개폐기(동)_센서7"], "focus":true}}
else if (deviceCount == 8)  // 센서 수가 8개라면 센서1, 센서2, 센서3, 센서4, 센서5, 센서6, 센서7, 센서8의 정보를 보여줌
    msg.payload={"group":{"show":["자동개폐기(동)_센서1", "자동개폐기(동)_센서2", "자동개폐기(동)_센서3", "자동개폐기(동)_센서4", "자동개폐기(동)_센서5", "자동개폐기(동)_센서6", "자동개폐기(동)_센서7", "자동개폐기(동)_센서8"], "focus":true}}

return msg;