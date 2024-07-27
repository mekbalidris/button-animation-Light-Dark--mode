const sunpath = "M3 146.605L17.4576 126.706M57.4045 164V139.403M97.738 126.757L112.196 146.657M107.905 16L93.8841 36.2096M58.4045 24.5967V0M17.8945 35.8819L3.0065 16.3026M108.405 83C108.405 110.614 86.0187 133 58.4045 133C30.7903 133 8.40451 110.614 8.40451 83C8.40451 55.3858 30.7903 33 58.4045 33C86.0187 33 108.405 55.3858 108.405 83Z";
const moonpath = "M53.0099 13.2936L77.5876 2.90444M65 49.002L91.6833 49M57 83L78.844 98.3245M34 52.564C34 80.1782 7 102.564 7 102.564C34.6142 102.564 57 80.1782 57 52.564C57 24.9498 34.6142 2.564 7 2.564C7 2.564 34 24.9498 34 52.564ZM35.4706 85.5C35.4706 87.9853 33.5744 90 31.2353 90C28.8963 90 27 87.9853 27 85.5C27 83.0147 28.8963 81 31.2353 81C33.5744 81 35.4706 83.0147 35.4706 85.5ZM52 63.6562C52 65.1233 50.8808 66.3125 49.5 66.3125C48.1193 66.3125 47 65.1233 47 63.6562C47 62.1892 48.1193 61 49.5 61C50.8808 61 52 62.1892 52 63.6562ZM38.1038 22.8217C38.5955 25.2315 37.1554 27.5602 34.8873 28.023C32.6192 28.4857 30.382 26.9073 29.8903 24.4974C29.3986 22.0876 30.8387 19.7589 33.1068 19.2961C35.3749 18.8334 37.6122 20.4118 38.1038 22.8217Z";


const title = document.getElementsByClassName("h1")[0];


const switch1 = document.querySelector("#switch1");
const switch2 = document.querySelector("#switch2");

let toggle = false;

switch1.addEventListener('click', ()=>{

const timeline = anime.timeline({
    duration: 1200,
    easing : "easeOutExpo"
});

    timeline.add({
        targets: ".sun",
        d:toggle ? [{value: sunpath}] : [{value: moonpath}],
        translateX: toggle? 0 : 250,
        translateY: toggle? 0 : 30,
    });

    timeline.add({
        duration: 0,
        targets: "#switch1",
        backgroundImage: toggle ? 
        "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDgwQzAgMzUuODE3MiAzNS44MTcyIDAgODAgMEgzMjBDMzY0LjE4MyAwIDQwMCAzNS44MTcyIDQwMCA4MFYxMjBDNDAwIDE2NC4xODMgMzY0LjE4MyAyMDAgMzIwIDIwMEg4MEMzNS44MTcyIDIwMCAwIDE2NC4xODMgMCAxMjBWODBaIiBmaWxsPSIjMDBCM0ZGIi8+CjxwYXRoIGQ9Ik0zMDQuOTggMTEwLjE4NUMzMDQuOTggMTE3LjU2NiAyOTguOTk2IDEyMy41NSAyOTEuNjE1IDEyMy41NUMyODQuMjM0IDEyMy41NSAyNzguMjUgMTE3LjU2NiAyNzguMjUgMTEwLjE4NUMyNzguMjUgMTAyLjgwNCAyODQuMjM0IDk2LjgyIDI5MS42MTUgOTYuODJDMjk4Ljk5NiA5Ni44MiAzMDQuOTggMTAyLjgwNCAzMDQuOTggMTEwLjE4NVoiIGZpbGw9IiNEOUQ5RDkiLz4KPHBhdGggZD0iTTM0My44NiAxMDEuMjc1QzM0My44NiAxMTMuNTc3IDMzMy44ODcgMTIzLjU1IDMyMS41ODUgMTIzLjU1QzMwOS4yODMgMTIzLjU1IDI5OS4zMSAxMTMuNTc3IDI5OS4zMSAxMDEuMjc1QzI5OS4zMSA4OC45NzI5IDMwOS4yODMgNzkgMzIxLjU4NSA3OUMzMzMuODg3IDc5IDM0My44NiA4OC45NzI5IDM0My44NiAxMDEuMjc1WiIgZmlsbD0iI0Q5RDlEOSIvPgo8cGF0aCBkPSJNMzcwLjU5IDExMC4xODVDMzcwLjU5IDExOS4zNTYgMzYzLjE1NiAxMjYuNzkgMzUzLjk4NSAxMjYuNzlDMzQ0LjgxNCAxMjYuNzkgMzM3LjM4IDExOS4zNTYgMzM3LjM4IDExMC4xODVDMzM3LjM4IDEwMS4wMTQgMzQ0LjgxNCA5My41OCAzNTMuOTg1IDkzLjU4QzM2My4xNTYgOTMuNTggMzcwLjU5IDEwMS4wMTQgMzcwLjU5IDExMC4xODVaIiBmaWxsPSIjRDlEOUQ5Ii8+CjxwYXRoIGQ9Ik0zODcuNiAxMjMuOTU1QzM4Ny42IDEzMy4xMjYgMzgwLjE2NiAxNDAuNTYgMzcwLjk5NSAxNDAuNTZDMzYxLjgyNCAxNDAuNTYgMzU0LjM5IDEzMy4xMjYgMzU0LjM5IDEyMy45NTVDMzU0LjM5IDExNC43ODQgMzYxLjgyNCAxMDcuMzUgMzcwLjk5NSAxMDcuMzVDMzgwLjE2NiAxMDcuMzUgMzg3LjYgMTE0Ljc4NCAzODcuNiAxMjMuOTU1WiIgZmlsbD0iI0Q5RDlEOSIvPgo8cGF0aCBkPSJNMzczLjgzIDE0My4zOTVDMzczLjgzIDE1Mi41NjYgMzY2LjM5NiAxNjAgMzU3LjIyNSAxNjBDMzQ4LjA1NCAxNjAgMzQwLjYyIDE1Mi41NjYgMzQwLjYyIDE0My4zOTVDMzQwLjYyIDEzNC4yMjQgMzQ4LjA1NCAxMjYuNzkgMzU3LjIyNSAxMjYuNzlDMzY2LjM5NiAxMjYuNzkgMzczLjgzIDEzNC4yMjQgMzczLjgzIDE0My4zOTVaIiBmaWxsPSIjRDlEOUQ5Ii8+CjxwYXRoIGQ9Ik0zNDAuNjIgMTQwLjk2NUMzNDAuNjIgMTUwLjEzNiAzMzMuMTg2IDE1Ny41NyAzMjQuMDE1IDE1Ny41N0MzMTQuODQ0IDE1Ny41NyAzMDcuNDEgMTUwLjEzNiAzMDcuNDEgMTQwLjk2NUMzMDcuNDEgMTMxLjc5NCAzMTQuODQ0IDEyNC4zNiAzMjQuMDE1IDEyNC4zNkMzMzMuMTg2IDEyNC4zNiAzNDAuNjIgMTMxLjc5NCAzNDAuNjIgMTQwLjk2NVoiIGZpbGw9IiNEOUQ5RDkiLz4KPHBhdGggZD0iTTMwOC4yMiAxNDMuMzk1QzMwOC4yMiAxNTIuNTY2IDMwMC43ODYgMTYwIDI5MS42MTUgMTYwQzI4Mi40NDQgMTYwIDI3NS4wMSAxNTIuNTY2IDI3NS4wMSAxNDMuMzk1QzI3NS4wMSAxMzQuMjI0IDI4Mi40NDQgMTI2Ljc5IDI5MS42MTUgMTI2Ljc5QzMwMC43ODYgMTI2Ljc5IDMwOC4yMiAxMzQuMjI0IDMwOC4yMiAxNDMuMzk1WiIgZmlsbD0iI0Q5RDlEOSIvPgo8cGF0aCBkPSJNMjkxLjIxIDEyOS42MjVDMjkxLjIxIDEzOC43OTYgMjgzLjc3NiAxNDYuMjMgMjc0LjYwNSAxNDYuMjNDMjY1LjQzNCAxNDYuMjMgMjU4IDEzOC43OTYgMjU4IDEyOS42MjVDMjU4IDEyMC40NTQgMjY1LjQzNCAxMTMuMDIgMjc0LjYwNSAxMTMuMDJDMjgzLjc3NiAxMTMuMDIgMjkxLjIxIDEyMC40NTQgMjkxLjIxIDEyOS42MjVaIiBmaWxsPSIjRDlEOUQ5Ii8+CjxwYXRoIGQ9Ik0yODEuNDkgMTEzLjAySDM2Ni41NFYxNDIuOTlIMjgxLjQ5VjExMy4wMloiIGZpbGw9IiNEOUQ5RDkiLz4KPHBhdGggZD0iTTE5NC4xNSA1My45ODc1QzE5NC4xNSA2MC4xMzg2IDE4OS4xNjQgNjUuMTI1IDE4My4wMTIgNjUuMTI1QzE3Ni44NjEgNjUuMTI1IDE3MS44NzUgNjAuMTM4NiAxNzEuODc1IDUzLjk4NzVDMTcxLjg3NSA0Ny44MzY0IDE3Ni44NjEgNDIuODUgMTgzLjAxMiA0Mi44NUMxODkuMTY0IDQyLjg1IDE5NC4xNSA0Ny44MzY0IDE5NC4xNSA1My45ODc1WiIgZmlsbD0iI0Q5RDlEOSIvPgo8cGF0aCBkPSJNMjI2LjU1IDQ2LjU2MjVDMjI2LjU1IDU2LjgxNDMgMjE4LjIzOSA2NS4xMjUgMjA3Ljk4OCA2NS4xMjVDMTk3LjczNiA2NS4xMjUgMTg5LjQyNSA1Ni44MTQzIDE4OS40MjUgNDYuNTYyNUMxODkuNDI1IDM2LjMxMDcgMTk3LjczNiAyOCAyMDcuOTg4IDI4QzIxOC4yMzkgMjggMjI2LjU1IDM2LjMxMDcgMjI2LjU1IDQ2LjU2MjVaIiBmaWxsPSIjRDlEOUQ5Ii8+CjxwYXRoIGQ9Ik0yNDguODI1IDUzLjk4NzVDMjQ4LjgyNSA2MS42Mjk3IDI0Mi42MyA2Ny44MjUgMjM0Ljk4OCA2Ny44MjVDMjI3LjM0NSA2Ny44MjUgMjIxLjE1IDYxLjYyOTcgMjIxLjE1IDUzLjk4NzVDMjIxLjE1IDQ2LjM0NTMgMjI3LjM0NSA0MC4xNSAyMzQuOTg4IDQwLjE1QzI0Mi42MyA0MC4xNSAyNDguODI1IDQ2LjM0NTMgMjQ4LjgyNSA1My45ODc1WiIgZmlsbD0iI0Q5RDlEOSIvPgo8cGF0aCBkPSJNMjYzIDY1LjQ2MjVDMjYzIDczLjEwNDcgMjU2LjgwNSA3OS4zIDI0OS4xNjIgNzkuM0MyNDEuNTIgNzkuMyAyMzUuMzI1IDczLjEwNDcgMjM1LjMyNSA2NS40NjI1QzIzNS4zMjUgNTcuODIwMyAyNDEuNTIgNTEuNjI1IDI0OS4xNjIgNTEuNjI1QzI1Ni44MDUgNTEuNjI1IDI2MyA1Ny44MjAzIDI2MyA2NS40NjI1WiIgZmlsbD0iI0Q5RDlEOSIvPgo8cGF0aCBkPSJNMjUxLjUyNSA4MS42NjI1QzI1MS41MjUgODkuMzA0NyAyNDUuMzMgOTUuNSAyMzcuNjg4IDk1LjVDMjMwLjA0NSA5NS41IDIyMy44NSA4OS4zMDQ3IDIyMy44NSA4MS42NjI1QzIyMy44NSA3NC4wMjAzIDIzMC4wNDUgNjcuODI1IDIzNy42ODggNjcuODI1QzI0NS4zMyA2Ny44MjUgMjUxLjUyNSA3NC4wMjAzIDI1MS41MjUgODEuNjYyNVoiIGZpbGw9IiNEOUQ5RDkiLz4KPHBhdGggZD0iTTIyMy44NSA3OS42Mzc1QzIyMy44NSA4Ny4yNzk3IDIxNy42NTUgOTMuNDc1IDIxMC4wMTIgOTMuNDc1QzIwMi4zNyA5My40NzUgMTk2LjE3NSA4Ny4yNzk3IDE5Ni4xNzUgNzkuNjM3NUMxOTYuMTc1IDcxLjk5NTMgMjAyLjM3IDY1LjggMjEwLjAxMiA2NS44QzIxNy42NTUgNjUuOCAyMjMuODUgNzEuOTk1MyAyMjMuODUgNzkuNjM3NVoiIGZpbGw9IiNEOUQ5RDkiLz4KPHBhdGggZD0iTTE5Ni44NSA4MS42NjI1QzE5Ni44NSA4OS4zMDQ3IDE5MC42NTUgOTUuNSAxODMuMDEyIDk1LjVDMTc1LjM3IDk1LjUgMTY5LjE3NSA4OS4zMDQ3IDE2OS4xNzUgODEuNjYyNUMxNjkuMTc1IDc0LjAyMDMgMTc1LjM3IDY3LjgyNSAxODMuMDEyIDY3LjgyNUMxOTAuNjU1IDY3LjgyNSAxOTYuODUgNzQuMDIwMyAxOTYuODUgODEuNjYyNVoiIGZpbGw9IiNEOUQ5RDkiLz4KPHBhdGggZD0iTTE4Mi42NzUgNzAuMTg3NUMxODIuNjc1IDc3LjgyOTcgMTc2LjQ4IDg0LjAyNSAxNjguODM3IDg0LjAyNUMxNjEuMTk1IDg0LjAyNSAxNTUgNzcuODI5NyAxNTUgNzAuMTg3NUMxNTUgNjIuNTQ1MyAxNjEuMTk1IDU2LjM1IDE2OC44MzcgNTYuMzVDMTc2LjQ4IDU2LjM1IDE4Mi42NzUgNjIuNTQ1MyAxODIuNjc1IDcwLjE4NzVaIiBmaWxsPSIjRDlEOUQ5Ii8+CjxwYXRoIGQ9Ik0xNzQuNTc1IDU2LjM1SDI0NS40NVY4MS4zMjVIMTc0LjU3NVY1Ni4zNVoiIGZpbGw9IiNEOUQ5RDkiLz4KPHBhdGggZD0iTTE4Mi44ODggNTcuMjUzMUwxODMuODEzIDU3LjYzMTZMMTg5LjM2OSA0NC4wNDRMMjAwLjc1NCA0MC45NjUzTDIwMC40OTMgNDBMMTg4LjYzMSA0My4yMDc4TDE4Mi44ODggNTcuMjUzMVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xODMuODY3IDU3LjM3OUwxODIuOTQxIDU3Ljc1NzVMMTc3LjM4NSA0NC4xNjk5TDE2NiA0MS4wOTEyTDE2Ni4yNjEgNDAuMTI1OUwxNzguMTIzIDQzLjMzMzdMMTgzLjg2NyA1Ny4zNzlaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjE2Ljg4OCAxNTkuMjUzTDIxNy44MTMgMTU5LjYzMkwyMjMuMzY5IDE0Ni4wNDRMMjM0Ljc1NCAxNDIuOTY1TDIzNC40OTMgMTQyTDIyMi42MzEgMTQ1LjIwOEwyMTYuODg4IDE1OS4yNTNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjE3Ljg2NyAxNTkuMzc5TDIxNi45NDEgMTU5Ljc1N0wyMTEuMzg1IDE0Ni4xN0wyMDAgMTQzLjA5MUwyMDAuMjYxIDE0Mi4xMjZMMjEyLjEyMyAxNDUuMzM0TDIxNy44NjcgMTU5LjM3OVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0zMzAuODg4IDg3LjI1MzFMMzMxLjgxMyA4Ny42MzE2TDMzNy4zNjkgNzQuMDQ0TDM0OC43NTQgNzAuOTY1M0wzNDguNDkzIDcwTDMzNi42MzEgNzMuMjA3OEwzMzAuODg4IDg3LjI1MzFaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMzMxLjg2NyA4Ny4zNzlMMzMwLjk0MSA4Ny43NTc1TDMyNS4zODUgNzQuMTY5OUwzMTQgNzEuMDkxMkwzMTQuMjYxIDcwLjEyNTlMMzI2LjEyMyA3My4zMzM3TDMzMS44NjcgODcuMzc5WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==')"
        : 
        "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDgwQzAgMzUuODE3MiAzNS44MTcyIDAgODAgMEgzMjBDMzY0LjE4MyAwIDQwMCAzNS44MTcyIDQwMCA4MFYxMjBDNDAwIDE2NC4xODMgMzY0LjE4MyAyMDAgMzIwIDIwMEg4MEMzNS44MTcyIDIwMCAwIDE2NC4xODMgMCAxMjBWODBaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNTYgNDhMNTcuMTIyNiA1MS40NTQ5SDYwLjc1NTNMNTcuODE2NCA1My41OTAyTDU4LjkzODkgNTcuMDQ1MUw1NiA1NC45MDk4TDUzLjA2MTEgNTcuMDQ1MUw1NC4xODM2IDUzLjU5MDJMNTEuMjQ0NyA1MS40NTQ5SDU0Ljg3NzRMNTYgNDhaIiBmaWxsPSIjRDlEOUQ5Ii8+CjxwYXRoIGQ9Ik0xNDcgNDNMMTQ4LjEyMyA0Ni40NTQ5SDE1MS43NTVMMTQ4LjgxNiA0OC41OTAyTDE0OS45MzkgNTIuMDQ1MUwxNDcgNDkuOTA5OEwxNDQuMDYxIDUyLjA0NTFMMTQ1LjE4NCA0OC41OTAyTDE0Mi4yNDUgNDYuNDU0OUgxNDUuODc3TDE0NyA0M1oiIGZpbGw9IiNEOUQ5RDkiLz4KPHBhdGggZD0iTTE3MiAxNTRMMTczLjEyMyAxNTcuNDU1SDE3Ni43NTVMMTczLjgxNiAxNTkuNTlMMTc0LjkzOSAxNjMuMDQ1TDE3MiAxNjAuOTFMMTY5LjA2MSAxNjMuMDQ1TDE3MC4xODQgMTU5LjU5TDE2Ny4yNDUgMTU3LjQ1NUgxNzAuODc3TDE3MiAxNTRaIiBmaWxsPSIjRDlEOUQ5Ii8+CjxwYXRoIGQ9Ik0xMDYgMTA1TDEwNy4xMjMgMTA4LjQ1NUgxMTAuNzU1TDEwNy44MTYgMTEwLjU5TDEwOC45MzkgMTE0LjA0NUwxMDYgMTExLjkxTDEwMy4wNjEgMTE0LjA0NUwxMDQuMTg0IDExMC41OUwxMDEuMjQ1IDEwOC40NTVIMTA0Ljg3N0wxMDYgMTA1WiIgZmlsbD0iI0Q5RDlEOSIvPgo8cGF0aCBkPSJNMTk1IDEwMEwxOTYuMTIzIDEwMy40NTVIMTk5Ljc1NUwxOTYuODE2IDEwNS41OUwxOTcuOTM5IDEwOS4wNDVMMTk1IDEwNi45MUwxOTIuMDYxIDEwOS4wNDVMMTkzLjE4NCAxMDUuNTlMMTkwLjI0NSAxMDMuNDU1SDE5My44NzdMMTk1IDEwMFoiIGZpbGw9IiNEOUQ5RDkiLz4KPHBhdGggZD0iTTcyIDE0NEw3My4xMjI2IDE0Ny40NTVINzYuNzU1M0w3My44MTY0IDE0OS41OUw3NC45Mzg5IDE1My4wNDVMNzIgMTUwLjkxTDY5LjA2MTEgMTUzLjA0NUw3MC4xODM2IDE0OS41OUw2Ny4yNDQ3IDE0Ny40NTVINzAuODc3NEw3MiAxNDRaIiBmaWxsPSIjRDlEOUQ5Ii8+CjxwYXRoIGQ9Ik0yNTQgMTY0TDI1NS4xMjMgMTY3LjQ1NUgyNTguNzU1TDI1NS44MTYgMTY5LjU5TDI1Ni45MzkgMTczLjA0NUwyNTQgMTcwLjkxTDI1MS4wNjEgMTczLjA0NUwyNTIuMTg0IDE2OS41OUwyNDkuMjQ1IDE2Ny40NTVIMjUyLjg3N0wyNTQgMTY0WiIgZmlsbD0iI0Q5RDlEOSIvPgo8cGF0aCBkPSJNMjU2IDc3TDI1Ny4xMjMgODAuNDU0OUgyNjAuNzU1TDI1Ny44MTYgODIuNTkwMkwyNTguOTM5IDg2LjA0NTFMMjU2IDgzLjkwOThMMjUzLjA2MSA4Ni4wNDUxTDI1NC4xODQgODIuNTkwMkwyNTEuMjQ1IDgwLjQ1NDlIMjU0Ljg3N0wyNTYgNzdaIiBmaWxsPSIjRDlEOUQ5Ii8+CjxwYXRoIGQ9Ik0yMTYgMTlMMjE3LjEyMyAyMi40NTQ5SDIyMC43NTVMMjE3LjgxNiAyNC41OTAyTDIxOC45MzkgMjguMDQ1MUwyMTYgMjUuOTA5OEwyMTMuMDYxIDI4LjA0NTFMMjE0LjE4NCAyNC41OTAyTDIxMS4yNDUgMjIuNDU0OUgyMTQuODc3TDIxNiAxOVoiIGZpbGw9IiNEOUQ5RDkiLz4KPC9zdmc+Cg==')",
    }, "-=300")
    timeline.add({
        targets: "#first",
        background:toggle? "rgb(255, 255, 255)" : "rgb(36, 36, 36)",
    }, "-=300")
    
    

    toggle ? title.textContent="Light Mod": title.textContent="Dark Mod";
    toggle ? title.style.color="rgb(36, 36, 36)": title.style.color="rgb(255, 255, 255)";



    if(!toggle){
        toggle = true;
    }
    else{
        toggle = false;
    }

})