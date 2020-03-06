import React from 'react'
import Anchor from './anchor'
import License from './license'
import './styles/footer.scss'

const Intro = () => {
  return (
    <span>
      <strong>A curious place for a curious mind.</strong>
      {` `}
      Copyright &copy; {new Date().getFullYear()}.
      Built with
      <Anchor
        to="https://www.gatsbyjs.org"
        className="underline-only"
      >
        Gastby
      </Anchor>
      and other
      <Anchor
        to="/credits"
        className="underline-only"
      >
        cool stuff
      </Anchor>.
    </span>
  )
}

const SocialIcon = ({ to, title, src }) => {
  return (
    <Anchor
      to={to}
      title={title}
      className="plain"
    >
      <img
        className="icon"
        src={src}
        alt={title}
      />
    </Anchor>
  )
}

const Social = () => {
  return (
    <div
      className="social"
    >
      <SocialIcon
        to="https://www.linkedin.com/in/cbouwer"
        title="LinkedIn"
        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIuMDAyIDUxMi4wMDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDIgNTEyLjAwMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxjaXJjbGUgc3R5bGU9ImZpbGw6IzQzNzZCMTsiIGN4PSIyNTYuMDAxIiBjeT0iMjU2IiByPSIyNTYiLz4KPHBhdGggc3R5bGU9ImZpbGw6IzMzNjY5OTsiIGQ9Ik01MTEuMDE2LDIzMy42MzRMMzk0LjcyOSwxMTcuMTk4Yy03MS4wMzUsOS4yMzctMTQ1LjI3LDcuODU5LTIxNi4zMDUsOS41MTEgIGMtMjkuMzA2LDAtNTguNjEzLDEzLjc5MS01My40NDEsNDYuNTQ1YzEwLjM0Myw2NS41MDgsMTUuNTE1LDEyOS4yOTMsMy40NDgsMTk2LjUyNWMtMS45LDguNTQ1LTUuODk3LDE3LjA4OS0xMS4xMTcsMjUuMDU5ICBMMjMzLjQ4LDUxMS4wMDVjNy40MjEsMC42NDYsMTQuOTI5LDAuOTk2LDIyLjUxOSwwLjk5NmMxNDEuMzg0LDAsMjU2LTExNC42MTYsMjU2LTI1NiAgQzUxMi4wMDEsMjQ4LjQ2MSw1MTEuNjU2LDI0MS4wMDUsNTExLjAxNiwyMzMuNjM0eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTM3Ni4wMjMsMTA5LjQ2OEgxMzUuOTc5Yy0xNC42NDMsMC0yNi41MSwxMS44NjctMjYuNTEsMjYuNTFWMzc2LjAyICBjMCwxNC42MzksMTEuODY3LDI2LjUxLDI2LjUxLDI2LjUxaDI0MC4wNDJjMTQuNjM5LDAsMjYuNTEtMTEuODcxLDI2LjUxLTI2LjUxVjEzNS45NzggIEM0MDIuNTMzLDEyMS4zMzUsMzkwLjY2MiwxMDkuNDY4LDM3Ni4wMjMsMTA5LjQ2OEwzNzYuMDIzLDEwOS40Njh6IE0yMDAuMTU1LDM2Mi41MTdjMCw0LjI2My0zLjQ1Myw3LjcxNi03LjcxNiw3LjcxNmgtMzIuODM3ICBjLTQuMjYzLDAtNy43MTYtMy40NTUtNy43MTYtNy43MTZWMjI0Ljg1NmMwLTQuMjYzLDMuNDU1LTcuNzE2LDcuNzE2LTcuNzE2aDMyLjgzOWM0LjI2MywwLDcuNzE2LDMuNDU1LDcuNzE2LDcuNzE2djEzNy42NjEgIEgyMDAuMTU1eiBNMTc2LjAyLDIwNC4xNjJjLTE3LjIzLDAtMzEuMTk2LTEzLjk2OS0zMS4xOTYtMzEuMjAxYzAtMTcuMjI5LDEzLjk2NS0zMS4xOTYsMzEuMTk2LTMxLjE5NiAgYzE3LjIzMiwwLDMxLjE5OCwxMy45NjksMzEuMTk4LDMxLjE5NkMyMDcuMjE4LDE5MC4xOTUsMTkzLjI1MSwyMDQuMTYyLDE3Ni4wMiwyMDQuMTYyTDE3Ni4wMiwyMDQuMTYyeiBNMzcxLjc3MywzNjMuMTM5ICBjMCwzLjkxOC0zLjE3NSw3LjA5Ni03LjA5LDcuMDk2aC0zNS4yNDJjLTMuOTE1LDAtNy4wOTItMy4xNzctNy4wOTItNy4wOTZ2LTY0LjU3NGMwLTkuNjMsMi44MjYtNDIuMjEtMjUuMTcyLTQyLjIxICBjLTIxLjcxOSwwLTI2LjEyNCwyMi4zLTI3LjAwOCwzMi4zMDR2NzQuNDc4YzAsMy45MTgtMy4xNzUsNy4wOTYtNy4wOTQsNy4wOTZoLTM0LjA4MmMtMy45MTgsMC03LjA5Ni0zLjE3Ny03LjA5Ni03LjA5NlYyMjQuMjM0ICBjMC0zLjkxOCwzLjE3Ny03LjA5Niw3LjA5Ni03LjA5NmgzNC4wODJjMy45MTgsMCw3LjA5NCwzLjE3Nyw3LjA5NCw3LjA5NnYxMi4wMDljOC4wNTQtMTIuMDg1LDIwLjAyMy0yMS40MTYsNDUuNTAyLTIxLjQxNiAgYzU2LjQyNSwwLDU2LjEwNSw1Mi43MTcsNTYuMTA1LDgxLjY4NnY2Ni42MjdIMzcxLjc3M3oiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0QxRDFEMTsiIGQ9Ik0zNzYuMDIzLDEwOS40NjhIMjU1LjQyN3YxMDcuNjdoNy42NDdjMy45MTgsMCw3LjA5NCwzLjE3Nyw3LjA5NCw3LjA5NnYxMi4wMDkgIGM4LjA1NC0xMi4wODUsMjAuMDIzLTIxLjQxNiw0NS41MDMtMjEuNDE2YzU2LjQyNSwwLDU2LjEwNSw1Mi43MTcsNTYuMTA1LDgxLjY4NnY2Ni42MjVjMCwzLjkxOC0zLjE3NSw3LjA5Ni03LjA5LDcuMDk2aC0zNS4yNDIgIGMtMy45MTUsMC03LjA5Mi0zLjE3Ny03LjA5Mi03LjA5NnYtNjQuNTc0YzAtOS42MywyLjgyNi00Mi4yMS0yNS4xNzItNDIuMjFjLTIxLjcxOSwwLTI2LjEyNCwyMi4zLTI3LjAwOCwzMi4zMDR2NzQuNDc4ICBjMCwzLjkxOC0zLjE3NSw3LjA5Ni03LjA5NCw3LjA5NmgtNy42NDd2MzIuMzAxaDEyMC41OTZjMTQuNjM5LDAsMjYuNTEtMTEuODcxLDI2LjUxLTI2LjUxVjEzNS45NzggIEM0MDIuNTMzLDEyMS4zMzUsMzkwLjY2MiwxMDkuNDY4LDM3Ni4wMjMsMTA5LjQ2OHoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
      />

      <SocialIcon
        to="https://twitter.com/cbillowes"
        title="Twitter"
        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNjVBMkQ5OyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzQTdDQTU7IiBkPSJNMzkzLjAxNCwxMzkuMzI2Yy0yNi43MDMsMjMuMTY5LTUzLjI1Myw0My40NzUtNzQuOTU0LDcxLjg1MiAgYy01My4zODEsNjQuMzcyLTExOC42MTMsMTU1LjctMjA3LjM4NiwxNDIuMDg2bDE1OC42MSwxNTguMzk2YzEzNC40NTYtNi44NzMsMjQxLjQ5Ny0xMTcuNDkzLDI0Mi42ODYtMjUzLjM3NkwzOTMuMDE0LDEzOS4zMjZ6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzk3Ljg3MiwxNjIuNDcxYy02LjUxMywyLjg4OS0xMy4yNzEsNS4xNjctMjAuMjA4LDYuODE1YzcuNjQ0LTcuMjYxLDEzLjM5LTE2LjM0NiwxNi42MzEtMjYuNDg0ICBjMC45MjYtMi44OTMtMi4yMTktNS4zOTgtNC44MzItMy44NDhjLTkuNjUsNS43MjUtMjAuMDQ0LDEwLjAxNi0zMC44OTQsMTIuNzYyYy0wLjYyOCwwLjE2LTEuMjc2LDAuMjQtMS45MjksMC4yNCAgYy0xLjk3OSwwLTMuODk2LTAuNzMzLTUuNDExLTIuMDY1Yy0xMS41NDItMTAuMTc0LTI2LjM5LTE1Ljc3Ny00MS44MDUtMTUuNzc3Yy02LjY3MiwwLTEzLjQwNSwxLjA0LTIwLjAxNiwzLjA5MSAgYy0yMC40ODcsNi4zNTMtMzYuMjk1LDIzLjI1NC00MS4yNTcsNDQuMTAzYy0xLjg2LDcuODE4LTIuMzYyLDE1LjY0OC0xLjQ5NiwyMy4yNjRjMC4wOTcsMC44NzYtMC4zMTQsMS40ODYtMC41NjksMS43NzIgIGMtMC40NSwwLjUwMi0xLjA4NCwwLjc5MS0xLjc0NSwwLjc5MWMtMC4wNzIsMC0wLjE1LTAuMDAzLTAuMjI0LTAuMDFjLTQ0Ljg0Ni00LjE2OC04NS4yODctMjUuNzcyLTExMy44NjktNjAuODM3ICBjLTEuNDU1LTEuNzg5LTQuMjUzLTEuNTY5LTUuNDE1LDAuNDIyYy01LjU5Niw5LjYwNi04LjU1NCwyMC41ODktOC41NTQsMzEuNzY2YzAsMTcuMTI3LDYuODg0LDMzLjI3LDE4LjgzNyw0NS4wMzkgIGMtNS4wMjctMS4xOTMtOS44OTMtMy4wNy0xNC40MTQtNS41ODJjLTIuMTg4LTEuMjE0LTQuODc3LDAuMzUtNC45MDgsMi44NTFjLTAuMzEsMjUuNDQ1LDE0LjU4OCw0OC4wODcsMzYuOTA1LDU4LjI4MiAgYy0wLjQ1LDAuMDEtMC45LDAuMDE0LTEuMzUsMC4wMTRjLTMuNTM3LDAtNy4xMjEtMC4zMzgtMTAuNjQ1LTEuMDE1Yy0yLjQ2My0wLjQ2Ny00LjUzMiwxLjg2Ny0zLjc2OCw0LjI1MyAgYzcuMjQ2LDIyLjYxOCwyNi43MTcsMzkuMjg4LDUwLjAyMSw0My4wN2MtMTkuMzM5LDEyLjk4My00MS44NjMsMTkuODMtNjUuMzAyLDE5LjgzbC03LjMwNi0wLjAwM2MtMi4yNTUsMC00LjE2LDEuNDY5LTQuNzMsMy42NSAgYy0wLjU2NSwyLjE0NSwwLjQ3NCw0LjQxMywyLjM5Niw1LjUzYzI2LjQxMiwxNS4zNzIsNTYuNTQxLDIzLjQ5NSw4Ny4xMzgsMjMuNDk1YzI2Ljc4NCwwLDUxLjgzOC01LjMxMyw3NC40NjYtMTUuNzk4ICBjMjAuNzQ1LTkuNjA5LDM5LjA3Ni0yMy4zNDUsNTQuNDg2LTQwLjgyN2MxNC4zNTctMTYuMjg2LDI1LjU4MS0zNS4wODUsMzMuMzY1LTU1Ljg3OWM3LjQxOC0xOS44MTYsMTEuMzQtNDAuOTY3LDExLjM0LTYxLjE1NCAgdi0wLjk2NGMwLTMuMjQxLDEuNDY1LTYuMjkxLDQuMDI0LTguMzdjOS43MDYtNy44ODIsMTguMTYtMTcuMTU4LDI1LjEyMi0yNy41NzJDNDAzLjc5NiwxNjQuNTc4LDQwMC44OTYsMTYxLjEzLDM5Ny44NzIsMTYyLjQ3MSAgTDM5Ny44NzIsMTYyLjQ3MXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0QxRDFEMTsiIGQ9Ik0zOTcuODcyLDE2Mi40NzFjLTYuNTE1LDIuODg5LTEzLjI3MSw1LjE2Ny0yMC4yMDgsNi44MTVjNy42NDQtNy4yNjEsMTMuMzktMTYuMzQ2LDE2LjYzMi0yNi40ODQgIGMwLjkyNi0yLjg5My0yLjIxOS01LjM5OC00LjgzMi0zLjg0OGMtOS42NSw1LjcyNS0yMC4wNDQsMTAuMDE2LTMwLjg5NCwxMi43NjJjLTAuNjI4LDAuMTYtMS4yNzYsMC4yNC0xLjkyOSwwLjI0ICBjLTEuOTc5LDAtMy44OTYtMC43MzMtNS40MTEtMi4wNjVjLTExLjU0Mi0xMC4xNzQtMjYuMzktMTUuNzc3LTQxLjgwNS0xNS43NzdjLTYuNjcxLDAtMTMuNDA1LDEuMDQtMjAuMDE2LDMuMDkxICBjLTE0LjMyMiw0LjQ0MS0yNi4zNDMsMTQuMDQ4LTMzLjk4NSwyNi41NDZ2MjA1LjQ3N2M2LjIyMi0yLjAyOSwxMi4yOTMtNC40MDMsMTguMTk4LTcuMTM5ICBjMjAuNzQ1LTkuNjA5LDM5LjA3Ni0yMy4zNDUsNTQuNDg2LTQwLjgyN2MxNC4zNTctMTYuMjg3LDI1LjU4MS0zNS4wODUsMzMuMzY1LTU1Ljg3OWM3LjQxOC0xOS44MTYsMTEuMzQtNDAuOTY3LDExLjM0LTYxLjE1NCAgdi0wLjk2NGMwLTMuMjQxLDEuNDY1LTYuMjkxLDQuMDI0LTguMzdjOS43MDYtNy44ODIsMTguMTYtMTcuMTU4LDI1LjEyMi0yNy41NzJDNDAzLjc5NiwxNjQuNTc4LDQwMC44OTYsMTYxLjEzLDM5Ny44NzIsMTYyLjQ3MXoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
      />

      <SocialIcon
        to="https://github.com/cbillowes"
        title="GitHub"
        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48cGF0aCBkPSJtNTEyIDI1N2MwIDEyMC04NC4xMDE1NjIgMjIwLjUtMTk2IDI0Ny41bC0zMC42MDE1NjItOTcuMTk5MjE5aC01OC43OTY4NzZsLTI5LjYwMTU2MiA5Ny4xOTkyMTljLTExMS44OTg0MzgtMjctMTk3LTEyNy41LTE5Ny0yNDcuNSAwLTE0MC42OTkyMTkgMTE1LjMwMDc4MS0yNTcgMjU2LTI1N3MyNTYgMTE2LjMwMDc4MSAyNTYgMjU3em0wIDAiIGZpbGw9IiMzODQ5NDkiLz48cGF0aCBkPSJtNTEyIDI1N2MwIDEyMC04NC4xMDE1NjIgMjIwLjUtMTk2IDI0Ny41bC0zMC42MDE1NjItOTcuMTk5MjE5aC0yOS4zOTg0Mzh2LTQwNy4zMDA3ODFjMTQwLjY5OTIxOSAwIDI1NiAxMTYuMzAwNzgxIDI1NiAyNTd6bTAgMCIgZmlsbD0iIzI5MzkzOSIvPjxwYXRoIGQ9Im0xODEuMjc3MzQ0IDQzMC4wNTg1OTRjLTYuMDc4MTI1IDAtMTIuMDExNzE5LS44NjcxODgtMTcuODI4MTI1LTIuNTc4MTI1LTE1LjEyODkwNy00LjQ2ODc1LTI3LjQyMTg3NS0xNC41NDY4NzUtMzYuNTQ2ODc1LTI5LjkxNDA2My00LjE2MDE1Ni03LjAxNTYyNS04LjQ5NjA5NC0xMS44Nzg5MDYtMTMuNjA1NDY5LTE1LjMwODU5NC01LjAyNzM0NC0zLjM4MjgxMi05LjAzOTA2My00LjY3MTg3NC0xMy4yNzM0MzctNC4zNjMyODFsLTIuNjM2NzE5LTI5Ljg4MjgxMmMxMS4xMTcxODctLjk1MzEyNSAyMS43NTM5MDYgMi4wNjI1IDMyLjU5Mzc1IDkuMzE2NDA2IDguODMyMDMxIDUuOTAyMzQ0IDE2LjI1NzgxMiAxNC4wNjI1IDIyLjcxODc1IDI0LjkxNDA2MyA1LjMwNDY4NyA4LjkyMTg3NCAxMS40MTAxNTYgMTQuMTUyMzQzIDE5LjI1IDE2LjQ2ODc1IDguODA0Njg3IDIuNTg5ODQzIDE3Ljk0MTQwNiAxLjUwNzgxMiAyOS42MzI4MTItMy40NzI2NTdsMTEuODA4NTk0IDI3LjU2NjQwN2MtMTEuMjk2ODc1IDQuODM1OTM3LTIxLjkyOTY4NyA3LjI1MzkwNi0zMi4xMTMyODEgNy4yNTM5MDZ6bTAgMCIgZmlsbD0iI2VjZWNmMSIvPjxwYXRoIGQ9Im00MDAuOTAyMzQ0IDI4Ny4zMDA3ODFjLTEwLjUwMzkwNiAyNy44OTg0MzgtMzYuOTAyMzQ0IDYzLjMwMDc4MS0xMDMuODAwNzgyIDczLjE5OTIxOSA4LjY5OTIxOSAxMi44OTg0MzggMTkuMTk5MjE5IDE5LjgwMDc4MSAxOC44OTg0MzggNDYuODAwNzgxdjk3LjE5OTIxOWMtMTkuMTk5MjE5IDQuODAwNzgxLTM5LjMwMDc4MSA3LjUtNjAgNy41cy0zOS44MDA3ODEtMi42OTkyMTktNTktNy41di05OC40MDIzNDRjMC0yNi42OTkyMTggMTAuMTAxNTYyLTM0LjE5OTIxOCAxNy44OTg0MzgtNDUuNTk3NjU2LTY2Ljg5ODQzOC05LjkwMjM0NC05My4yOTY4NzYtNDUuMzAwNzgxLTEwMy44MDA3ODItNzMuMTk5MjE5LTE0LjA5NzY1Ni0zNy4yMDMxMjUtNi41OTc2NTYtODMuNDAyMzQzIDE4LjAwMzkwNi0xMTIuODAwNzgxLjU5NzY1Ny0uNjAxNTYyIDEuNS0yLjEwMTU2MiAxLjE5OTIxOS0zLTExLjQwMjM0My0zNC4xOTkyMTkgMi4zOTg0MzgtNjIuNjk5MjE5IDMtNjUuNjk5MjE5IDEyLjg5ODQzOCAzLjg5ODQzOCAxNS0zLjkwMjM0MyA1Ni42OTkyMTkgMjEuNTk3NjU3bDcuMTk5MjE5IDQuMjAzMTI0YzMgMS43OTY4NzYgMi4xMDE1NjIuNTk3NjU3IDUuMTAxNTYyLjU5NzY1NyAxNy4zOTg0MzgtNC44MDA3ODEgMzUuNjk5MjE5LTcuNSA1My42OTkyMTktNy41IDE4LjMwMDc4MSAwIDM2LjMwMDc4MSAyLjY5OTIxOSA1NC41OTc2NTYgNy41bDIuMTAxNTYzLjMwMDc4MXMuNTk3NjU2IDAgMi4xMDE1NjItLjg5ODQzOGM1MS44OTg0MzgtMzEuNTAzOTA2IDUwLjA5NzY1Ny0yMS4zMDA3ODEgNjQuMTk1MzEzLTI1LjgwMDc4MS4zMDA3ODEgMyAxNC4xMDE1NjIgMzEuNzk2ODc1IDIuNzAzMTI1IDY1LjY5OTIxOS0xLjUgNC41IDQ1IDQ3LjA5NzY1NiAxOS4yMDMxMjUgMTE1LjgwMDc4MXptMCAwIiBmaWxsPSIjZWNlY2YxIi8+PHBhdGggZD0ibTQwMC45MDIzNDQgMjg3LjMwMDc4MWMtMTAuNTAzOTA2IDI3Ljg5ODQzOC0zNi45MDIzNDQgNjMuMzAwNzgxLTEwMy44MDA3ODIgNzMuMTk5MjE5IDguNjk5MjE5IDEyLjg5ODQzOCAxOS4xOTkyMTkgMTkuODAwNzgxIDE4Ljg5ODQzOCA0Ni44MDA3ODF2OTcuMTk5MjE5Yy0xOS4xOTkyMTkgNC44MDA3ODEtMzkuMzAwNzgxIDcuNS02MCA3LjV2LTM4Ny4zMDA3ODFjMTguMzAwNzgxIDAgMzYuMzAwNzgxIDIuNjk5MjE5IDU0LjYwMTU2MiA3LjVsMi4wOTc2NTcuMzAwNzgxcy42MDE1NjIgMCAyLjEwMTU2Mi0uODk4NDM4YzUxLjg5ODQzOC0zMS41MDM5MDYgNTAuMDk3NjU3LTIxLjMwMDc4MSA2NC4xOTkyMTktMjUuODAwNzgxLjMwMDc4MSAzIDE0LjEwMTU2MiAzMS43OTY4NzUgMi42OTkyMTkgNjUuNjk5MjE5LTEuNSA0LjUgNDUgNDcuMDk3NjU2IDE5LjIwMzEyNSAxMTUuODAwNzgxem0wIDAiIGZpbGw9IiNlMmUyZTciLz48L3N2Zz4K"
      />
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      <Intro />
      <div className="container">
        <License />
        <Social />
      </div>
    </footer>
  )
}

export default Footer
