const conversionForm = document.getElementById("conversion-form")
const unitInput = document.getElementById("unit-input")
const inputNote = document.getElementById("input-note")

const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")

const formatNumber = (number) => number.toFixed(3)

conversionForm.addEventListener("submit", (event) => {
	event.preventDefault()

	const value = Number(unitInput.value)

	if (!Number.isInteger(value) || value < 0) {
		inputNote.textContent = "Please enter a whole number from 0 upwards."
		unitInput.focus()
		return
	}

	inputNote.textContent = ""
	lengthOutput.textContent = `${value} meters = ${formatNumber(value * 3.281)} feet | ${value} feet = ${formatNumber(value / 3.281)} meters`
	volumeOutput.textContent = `${value} litres = ${formatNumber(value * 0.264)} gallons | ${value} gallons = ${formatNumber(value / 0.264)} litres`
	massOutput.textContent = `${value} kilos = ${formatNumber(value * 2.204)} pounds | ${value} pounds = ${formatNumber(value / 2.204)} kilos`
})