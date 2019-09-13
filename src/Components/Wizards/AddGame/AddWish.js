import './AddWish.css'
import React, { Component } from 'react'
import { AddCircle } from "grommet-icons";
import Axios from 'axios';
import swal from 'sweetalert';
// import axios from 'axios'

export default class AddWish extends Component {
    state= {
        points: 0
    }

    addGame = () => {
        const user_id = +this.props.user.user_id
        const {id, name, background_image, released, metacritic} = this.props.state
        const {points} = this.state
        Axios.post(`/api/gamelist/${user_id}`, {id, points, name, background_image, released, metacritic}).then(res => {
            swal('Success', `${name} was added to your games list for ${points} points`, 'success')
        }
        ).catch('error', 'Whoops! Something went wrong', 'error')
    }
    addWish = () => {
        const user_id = +this.props.user.user_id
        const {id, name, background_image, released, metacritic} = this.props.state
        const {points} = this.state
        Axios.post(`/api/wishlist/${user_id}`, {id, points, name, background_image, released, metacritic}).then(res => {
            swal('Success', `${name} was added to your wishlist`, 'success')
        }
        ).catch('error', 'Whoops! Something went wrong', 'error')
    }

    render() {
        console.log(this.props.state)
        return (
            <div className="wishDropdown">
                <div className="submit-games-addpoints">
                    <div>
                    
                    </div>
                    <div>
                        <h3> Points:</h3>
                        <input onChange={(e)=> {this.setState({points: e.target.value})}} className="submit-games-points" type="text" placeholder={this.state.points}/>
                    </div>
                </div>
                <div className="submit-game">
                    <div onClick={this.addGame} className="submit-wish link">
                        <h5>Add to Game List</h5>
                        <AddCircle size="medium" color="#FC9B00" />
                    </div>
                    <div onClick={this.addWish} className="submit-wish link">
                        <h5>Add to Wish List</h5>
                        <AddCircle size="medium" color="#FC9B00" />
                    </div>
                </div>
            </div>
        )
    }
}

var switchIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJfeDMyXzMyLW5pbnRlbmRvLXN3aXRjaCI+PGc+PHBhdGggZD0iTTEyNC40MzIsMjcuNTI2Yy00NS43ODYsOC4yMTItODIuNjQxLDQyLjA5LTk0LjI0MSw4Ni42NDQgICAgYy00LjIwOCwxNi4xMTgtNC41MTcsMjUuNTYyLTQuMDAzLDE1MC4zOThjMC4yMDQsMTE0LjU2NiwwLjMwOCwxMTcuMjM1LDIuMjU4LDEyNi4xNjhjMTAuNTc0LDQ3LjczNCw0NC40NTIsODEuNzE4LDkyLjcwMiw5Mi45MDYgICAgYzYuMjYyLDEuNDM3LDE0LjI2OSwxLjc0NSw2NS44MDQsMS45NTFjNTMuMjgsMC40MTEsNTguODI0LDAuMzA3LDYwLjI2MS0xLjEzMWMxLjQzNi0xLjQzNywxLjU0LTE5LjgxMywxLjU0LTIyOC4xMDkgICAgYzAtMTU0LjUwMy0wLjMwNy0yMjcuMTg1LTAuOTIzLTIyOC41MjFjLTAuOTI0LTEuNzQ0LTIuNTY2LTEuODQ3LTU4LjQxMy0xLjc0NEMxNDQuMDQxLDI2LjE5MiwxMzAuMzg4LDI2LjUsMTI0LjQzMiwyNy41MjYgICAgTDEyNC40MzIsMjcuNTI2eiIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiLz48cGF0aCBkPSJNMjEwLjU2NCwyNTYuMDQ2djE5Mi44OTZsLTM4LjgwNi0wLjUxMmMtMzUuNzI1LTAuNDExLTM5LjUyMy0wLjYxNC00Ni43MDktMi4zNTkgICAgYy0zMC42OTQtNy45MDctNTMuMzgzLTMxLjUyLTU5Ljg1MS02Mi4zMTZjLTIuMDUzLTkuNjQ5LTIuMDUzLTI0Ni40ODYtMC4xMDMtMjU1LjkzMWM1Ljc0OS0yNi43OTUsMjQuMzMxLTQ4Ljk2OCw0OS4yNzYtNTguOTI2ICAgIGMxMi41MjQtNS4wMzEsMTguMzc2LTUuNjQ2LDU5LjEzMi01Ljc0OWwzNi44NTQtMC4xMDN2MTkzSDIxMC41NjR6IiBzdHlsZT0iZmlsbDojQ0YyMDFCOyIvPjxwYXRoIGQ9Ik0xMzIuNjQ1LDEyMS4zNTdjLTUuOTU0LDEuMTI5LTE1LjA5LDUuNzUtMjAuMDE4LDkuOTU4Yy05Ljk1OCw4LjYyMy0xNC45ODgsMjAuOTQyLTE0LjE2NywzNS40MTcgICAgYzAuNDExLDcuNDk1LDAuODIxLDkuNTQ4LDMuOTAxLDE1LjYwNGM0LjUxNyw5LjIzOSwxMS4xODksMTYuMDE1LDIwLjQzLDIwLjUzMmM2LjM2NSwzLjE4Myw4LjAwNywzLjQ5MSwxNi4zMjIsMy43OTkgICAgYzcuNDkzLDAuMzA2LDEwLjE2MywwLDE1LjE5NC0xLjc0N2MyMC42MzQtNi45ODEsMzMuMTU5LTI3LDI5LjU2NS00Ny42MzNDMTc5Ljg2OSwxMzIuOTU3LDE1Ni41NjUsMTE2LjUzMywxMzIuNjQ1LDEyMS4zNTd6IiBzdHlsZT0iZmlsbDojRkZGRkZGOyIvPjxwYXRoIGQ9Ik0yOTUuMDUyLDI2LjYwMmMtMC40MDksMC4zMDgtMC42MTMsMTAzLjQ4LTAuNjEzLDIyOS40NDRjMCwyMDcuNjgyLDAuMTAxLDIyOC43MjcsMS41MzgsMjI5LjM0MiAgICBjMi41NjYsMC45MjQsNzYuNDgxLDAuNjE3LDg1LjYxOS0wLjQxMWMzOC43MDEtNC40MTQsNzIuODg4LTI3LjkyMyw5MS4zNjYtNjIuODI3YzIuMzYxLTQuNTE3LDUuNTQzLTEyLjAxMSw3LjE4Ni0xNi42MzEgICAgYzUuOTU1LTE3Ljg2NCw1Ljg1Mi0xMy4xNDEsNS44NTItMTQ5Ljk4NmMwLTEwOS4yMjktMC4yMDMtMTI1LjU1Mi0xLjU0LTEzMi40MjljLTkuNDQzLTQ5LjU4Ni00Ny4zMjQtODcuMDU3LTk3LjAxMi05NS41NzcgICAgYy02LjY3NC0xLjEyOS0xNi45MzktMS40MzctNTAuMDk5LTEuNDM3QzMxNC4zNTMsMjUuOTg2LDI5NS4zNjIsMjYuMjk0LDI5NS4wNTIsMjYuNjAyeiIgc3R5bGU9ImZpbGw6I0NGMjAxQjsiLz48cGF0aCBkPSJNMzk2Ljc4OSwyMzQuMDc3YzE0Ljg4NiwzLjkwMiwyNi45OTksMTUuMTkzLDMyLjAzLDI5LjY2OGMzLjE4MSw4LjkzMywzLjA4LDIyLjA3MS0wLjEwNSwzMC4yODcgICAgYy01Ljg0OSwxNS4wODktMTcuMjQ1LDI1LjY2My0zMS45MjUsMjkuNTY0Yy0yMy44MTcsNi4xNjEtNDkuMTc1LTguMjExLTU2LjA1NC0zMS44MjNjLTIuMDUzLTcuMTg4LTEuOTQ5LTE5LjQwNSwwLjQxLTI2Ljg5OSAgICBDMzQ4LjIzMSwyNDEuNTcxLDM3Mi45NzIsMjI3LjgxNSwzOTYuNzg5LDIzNC4wNzdMMzk2Ljc4OSwyMzQuMDc3eiIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiLz48L2c+PC9nPjxnIGlkPSJMYXllcl8xIi8+PC9zdmc+'
var ps4Icon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMjU2cHgiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjU2MDAwIDI1NTk5OCIgd2lkdGg9IjI1NnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgogICA8IVtDREFUQVsKICAgIC5maWw3IHtmaWxsOm5vbmV9CiAgICAuZmlsNiB7ZmlsbDojRUQzMjM3fQogICAgLmZpbDAge2ZpbGw6I0Y1QzEzNn0KICAgIC5maWwzIHtmaWxsOiNGNUM1MzV9CiAgICAuZmlsMSB7ZmlsbDojNDJCN0E1fQogICAgLmZpbDQge2ZpbGw6IzQwQjdBNX0KICAgIC5maWwyIHtmaWxsOiMwNjg5Qzd9CiAgICAuZmlsNSB7ZmlsbDojMDY4OEM3fQogICBdXT4KICA8L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfeDAwMjBfMSI+PGcgaWQ9Il8zOTQzNTQ1OTIiPjxwYXRoIGNsYXNzPSJmaWwwIiBkPSJNMTM2OTU0IDIyNzIyMWw5OTcyMSAtMzU2NDFjMTk1MzQsLTYxOTkgMjc3MTcsLTIxODk5IDc5ODQsLTI5NjA5IC0yNjM4OCwtMTE2MTMgLTY1NTY3LC0xMjMxOSAtODQxNzgsLTY5NjRsLTIzNDA1IDc3MzYgLTY4IDM1ODA1IDIwIC0xMDkxMSA1ODU1MSAtMjA3ODZjNzczMiwtMzA4NSAzMjk4MiwyMjUzIDIwNTMxLDc1MjRsLTc5MTEwIDI4Mjc2IC00NiAyNDU3MHoiLz48cGF0aCBjbGFzcz0iZmlsMSIgZD0iTTEzODc3MCAxNjIxODNsLTE2OTQgNTYwIC02OCAzNTgwNSAyMCAtMTA5MTEgMzk2NDQgLTE0MDc0IC0zNzkwMiAtMTEzODB6bTYwNTY5IDE4MTg2bC02MjMzOSAyMjI4MiAtMiAxMDYwIDM0NTIxIDExMTU2IDY1MTU2IC0yMzI4NyAtMzczMzYgLTExMjExeiIvPjxwYXRoIGNsYXNzPSJmaWwyIiBkPSJNMjM2Njc1IDE5MTU4MGMxOTUzNCwtNjE5OSAyNzcxNywtMjE4OTkgNzk4NCwtMjk2MDkgLTI2Mzg4LC0xMTYxMyAtNjU1NjcsLTEyMzE5IC04NDE3OCwtNjk2NGwtMjE3MTEgNzE3NiAzNzkwMiAxMTM4MCAxODkwNyAtNjcxMmM3NzMyLC0zMDg1IDMyOTgyLDIyNTMgMjA1MzEsNzUyNGwtMTY3NzEgNTk5NCAzNzMzNiAxMTIxMXoiLz48cGF0aCBjbGFzcz0iZmlsMyIgZD0iTTk0OTQ4IDEzNzUyN2wtNzU2MjMgMjcwMjljLTE5NTM0LDYxOTggLTI3NzE3LDIxODk5IC03OTg0LDI5NjA5IDI1OTEzLDExNDA1IDY0MTYxLDEyMjg4IDgzMTUxLDcyNDZsMTc0IC0yNDI4MyAtMzQyNDUgMTIxNTdjLTc3MzIsMzA4NSAtMzI5ODIsLTIyNTQgLTIwNTMxLC03NTI0bDU0ODgzIC0xOTYxNyAxNzUgLTI0NjE3eiIvPjxwYXRoIGNsYXNzPSJmaWw0IiBkPSJNNzczOTYgMTQzODAxbC01ODA3MSAyMDc1NWMtNTc2LDE4MyAtMTE0MiwzNzYgLTE3MDAsNTc0bDM2MTI3IDExNjc2IDQxMDIxIC0xNDY2MiA5NCAtMTMxNDQgLTE3NDAxIC01MjI0IC03MCAyNXptMTcxNzggNDYxOThsOTIgLTEyODcxIC0xOTAyNCA2NzUzIDE4OTMyIDYxMTh6Ii8+PHBvbHlnb24gY2xhc3M9ImZpbDUiIHBvaW50cz0iOTQ5NDgsMTM3NTI3IDc3NDY2LDE0Mzc3NiA5NDg2NywxNDkwMDAgIi8+PHBhdGggY2xhc3M9ImZpbDYiIGQ9Ik05NDM5OSAyMTQ1NTdsNDI1NTUgMTI2NjQgMjk1IC0xNTc1NjFjLTIwNCwtMTM2MjQgMTY3MDMsLTg3NzcgMTUzOTEsNDEyM2wwIDY1MjMzYzIwMTc1LDE1MjE1IDQ5MTgzLDQyNCA0ODExNSwtMjk3MDYgMjE4LC0zMTI2OCAtMTAyMzgsLTUyNTc3IC00NDUxMCwtNjI2MjFsLTYwNTIxIC0xNzkxMyAtMTMyNSAxODU3ODF6Ii8+PC9nPjwvZz48cmVjdCBjbGFzcz0iZmlsNyIgaGVpZ2h0PSIyNTU5OTgiIHdpZHRoPSIyNTU5OTgiIHg9IjEiLz48L3N2Zz4='
var xboxIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJfeDMzXzg3LXhib3giPjxnPjxnPjxwYXRoIGQ9Ik0xNDkuNjI4LDU4LjVjNDQuMjMtMi4zMTksMTAxLjcyMSwzMS45OSwxMDUuOTg1LDMyLjgyNWMwLjY1LDAuMDkzLDkuNjQ1LTMuODk1LDIwLjAzLTguOTk0ICAgICBjNTkuMjUxLTI4LjgzOCw4Ny4xNjItMjMuOTIzLDk5LjU4OC0yMy4zNjdDMzE1Ljk3OSwyMi41MjMsMjMzLjYzOCwxMi42LDE1OC4zNDQsNDguMTE1ICAgICBDMTM2LjY0Niw1OC40MDgsMTM2LjA5LDU5LjE0OSwxNDkuNjI4LDU4LjV6IiBzdHlsZT0iZmlsbDojMTA3QzEwOyIvPjxwYXRoIGQ9Ik0xOTMuNDg3LDE1MS45NjhjLTI3LjUzOS0yNC45NDMtNTMuODczLTQ5Ljk3OS04MC4xMTUtNTguNzg4ICAgICBjLTE0LjA5NS00LjcyOS0xNS4xMTUtNC40NTEtMjYuNjEyLDcuNTExYy0yNy4wNzYsMjguMTg4LTQ5LjYwOSw3My45MDMtNTUuOTEzLDExMy40OTZjLTUuMDA5LDMxLjcxMy01LjY1Nyw0MC42MTYtMy44OTYsNTYuMTAxICAgICBjNS4xOTIsNDYuODI1LDE2LjA0MSw3OS4xODgsMzcuNTU1LDExMi4xMDVjOC44MDgsMTMuNTM4LDExLjIyLDE2LjA0MSw4LjYyMyw5LjE3OWMtMy44OTUtMTAuMTk5LTAuMjc5LTM0Ljc3MSw4LjgxLTU5LjM0NCAgICAgQzk1LjE5OCwyOTYuMDY0LDEzMS45MTcsMjI3LjU0MSwxOTMuNDg3LDE1MS45Njh6IiBzdHlsZT0iZmlsbDojMTA3QzEwOyIvPjxwYXRoIGQ9Ik00ODIuNDIyLDIxMC44NDljLTE1LjY3LTc0LjE4LTYyLjU4OS0xMjAuODIyLTY5LjE3NS0xMjAuODIyYy02Ljc3LDAtMjIuNDM4LDYuMDI3LTMzLjM4MSwxMi44ODkgICAgIGMtMjEuNjA0LDEzLjQ0NS0zOC4wMTgsMjkuMTE1LTU5LjYyMiw0OC45NTljMzkuMzE2LDQ5LjQyMyw5NC43NjYsMTI5LjI2LDExMy45NiwxODcuNTg0ICAgICBjNi4zMDYsMTkuMTk0LDguOTk1LDM4LjEwOSw2Ljg2MSw0OC40OTVjLTEuNTc0LDcuODgyLTEuNTc0LDcuODgyLDEuMyw0LjI2NmM1LjY1Ni03LjEzOSwxOC40NTEtMjkuMDIzLDIzLjU1MS00MC4zMzYgICAgIGM2Ljg2My0xNS4wMjEsMTMuOTEtMzcuMjc0LDE3LjI0Ny01NC40M0M0ODcuMTUsMjc2LjU5Myw0ODYuNzgsMjMxLjgwNSw0ODIuNDIyLDIxMC44NDl6IiBzdHlsZT0iZmlsbDojMTA3QzEwOyIvPjxwYXRoIGQ9Ik0yNTcuNDY5LDIxMi4xNDhjLTQuNTQ0LTEuMDIxLTQ1LjgwNywzNS44ODQtNzUuNDc5LDY3LjMxOCAgICAgYy01Mi4yMDYsNTUuNDUtODIuNzEzLDEwNC4wMzktODIuNzEzLDEzMS43NjZjMCwxMy44MTQsNS44NDEsMjAuNzY5LDMxLjcxMywzNy42NDZjMzAuNzg1LDIwLjAyNyw2Ni42NywzMi43MjksMTAyLjA5MSwzNi4xNjMgICAgIGMyOS42NzMsMi44NzMsNjUuNjQ5LTAuODM2LDkzLjA5OS05LjQ1OGMzMy4yODYtMTAuNDc4LDc4LjUzOC0zNy44MzMsODUuODYzLTUxLjgzNGM5LjU1LTE4LjQ1My05LjM2NC01OS43MTYtNTAuNDQzLTExMC4wNjYgICAgIEMzMzUuNjM3LDI4MS43ODMsMjY2LjE4NSwyMTQuMDk0LDI1Ny40NjksMjEyLjE0OHoiIHN0eWxlPSJmaWxsOiMxMDdDMTA7Ii8+PC9nPjwvZz48L2c+PGcgaWQ9IkxheWVyXzEiLz48L3N2Zz4='


            // <div className="wishDropdown" >
            //   <h4>Please Select One</h4>
            //   <div className="check-container"  >
            //     <div className="filter-box">
            //       <div className="filter-option">
            //             <input
            //               type="checkbox"
            //               checked={ps4Checked}
            //               onChange={() => this.setState({ console: "Playstation 4", ps4Checked: !ps4Checked, xboxChecked: false, switchChecked: false})}
            //             />
            //             <img className="console-icon" alt="" src={ps4Icon} />
            //       </div>
            //       <div className="filter-option">
            //             <input
            //               type="checkbox"
            //               checked={xboxChecked}
            //               onChange={() => this.setState({ console: "Xbox One", xboxChecked: !xboxChecked, ps4Checked: false, switchChecked: false })}
            //             />
            //             <img className="console-icon" alt="" src={xboxIcon} />
            //       </div>
            //       <div className="filter-option">
            //             <input
            //               type="checkbox"
            //               checked={switchChecked}
            //               onChange={() => this.setState({ console: "Nintendo Switch", switchChecked: !switchChecked, ps4Checked: false, xboxChecked: false })}
            //             />
            //             <img className="console-icon" alt="" src={switchIcon} />
            //       </div>
            //     </div>
            //       <div className="Addwish_Add_Wish">
            //       </div>
            //       <div className="Addwish_Add_game">
            //       </div>
            //     <div className="submit-game">
            //       <div onClick={()=> {console.log('hello')}} className="submit-wish link">
            //         <h5>Add Game</h5>
            //         <AddCircle size="medium" color="#FC9B00" />
            //       </div>
            //       <div onClick={()=> {console.log('good-bye')}} className="submit-wish link">
            //         <h5>Save Wish</h5>
            //         <AddCircle size="medium" color="#FC9B00" />
            //       </div>
            //     </div>
            //   </div>
            // </div>