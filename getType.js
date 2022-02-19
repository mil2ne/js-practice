// default 로 되어 있으면 굳이 함수이름은 필요없다.

export default function (data) {
  return Object.prototype.toString.call(data).slice(8,-1)
}
