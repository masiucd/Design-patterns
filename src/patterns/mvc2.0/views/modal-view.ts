import { Student } from "../models/student"
import { Teacher } from "../models/teacher"
import { ListView } from "./list-view"

export class ModalView<T, S> {
  parentElement: HTMLDivElement
  list: Array<any>
  data: Student | Teacher
  title: string
  listView: ListView<T>
  subTitles: string[]
  confirmationText: string
  constructor(
    parentElement: HTMLDivElement,
    list: any,
    data: Student | Teacher,
    title: string,
    subTitles: string[]
  ) {
    this.parentElement = parentElement
    this.list = list
    this.data = data
    this.title = title
    this.subTitles = subTitles
    this.listView = new ListView(this.parentElement, this.list, this.title, this.subTitles)
    this.confirmationText = ""
  }

  updateText(text: string) {
    console.log("TEXT", text)
    this.confirmationText = text
  }

  render(): void {
    const modalWrapper = document.querySelector(".modal") as HTMLDListElement
    modalWrapper.classList.add("show-modal")

    const html = `
    <div class="modal-container">
      ${this.listView.renderRawHtml()}
      ${this.confirmationText}
      <button class="close-modal">
        ❌
      </button>
    </div>
    `

    modalWrapper.innerHTML = html
    document.querySelector(".close-modal")?.addEventListener("click", () => {
      modalWrapper.classList.remove("show-modal")
    })

    document.querySelectorAll(".modal tbody tr").forEach((tr: any) => {
      tr.addEventListener("click", (event: any) => {
        if ("send" in this.data) {
          const confirmationText = `You have now been registered to the ${event.target.innerText} Course`
          this.data.send(confirmationText, this.data)
          this.updateText(confirmationText)
          this.updateHtml()
        }

        // if (tr.dataset.id === String(this.data.id)) {
        //   if ("send" in this.data) {
        //     const confirmationText = `You have now been registered to ${event.target.innerText}`
        //     this.data.send(confirmationText, this.data)
        //     this.updateText(confirmationText)
        //   }
        // }
      })
    })
  }
  updateHtml() {
    this.render()
  }
}
