import React from "react";
import classes from "./Frends.module.css";

let Frends = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://sun9-59.userapi.com/impf/u1qTPDAGnIIdg0e9ZJyD_ijBm2Z9Gha4S9PNtw/AxmfZjmDyrA.jpg?size=900x1200&quality=96&proxy=1&sign=f89b66719da1dcc8dd6114619e7ae20a&type=album",
        followed: true,
        fullName: "Max Noskov",
        status: "I'm Yakor",
        workedIn: "НПЗ Роснефть",
        onlineNow: false,
        location: { country: "Russia", city: "Nsk" },
      },
      {
        id: 2,
        photoUrl:
          "https://sun9-48.userapi.com/impg/LHEWqYOQUKtuJLdeWYrc1lnKC0fhRDoCDgPaow/f-jceP9LTUY.jpg?size=2560x1707&quality=96&proxy=1&sign=44cf25577ce4116144fcb70374aaeef8&type=album",
        followed: true,
        fullName: "Илья Зинчев",
        status: "Moya Podpiska",
        workedIn: "НХК Роснефть",
        onlineNow: true,
        location: { country: "Russia", city: "Nsk" },
      },
      {
        id: 3,
        photoUrl:
          "https://sun9-73.userapi.com/impf/e0PST9JAYShzfdtAPtJ-iaIrXIVbiLLTCLsj1Q/5PIZSxR3QZk.jpg?size=1620x2160&quality=96&proxy=1&sign=7fe147a3f85a08d45e2b8c06b38ce2b1&type=album",
        followed: true,
        fullName: "Владимир Менжулин",
        status: "Gelert v klochya",
        workedIn: "ТЭЦ",
        onlineNow: true,
        location: { country: "Russia", city: "Nsk" },
      },
      {
        id: 4,
        photoUrl:
          "https://sun9-36.userapi.com/impf/c855332/v855332527/123146/RBIwLSi5UdA.jpg?size=1536x2048&quality=96&proxy=1&sign=c52713f7179fe4bc0e90206a0ed0e10e&type=album",
        followed: true,
        fullName: "Алексей Довгаль",
        status: "Bayern, sosat",
        workedIn: "Санорс",
        onlineNow: true,
        location: { country: "Russia", city: "Nsk" },
      },
      {
        id: 5,
        photoUrl:
          "https://cstor.nn2.ru/userfiles/data/ufiles/1/8/84/88422.1188817038_our_milicia_11.jpg",
        followed: false,
        fullName: "Her s gory",
        status: "I'm musor",
        workedIn: "Ментовочка",
        onlineNow: true,/* он вообще всегда онлаен */
        location: { country: "Russia", city: "secret" },
      },
    ]);
  }

  return (
    <div className={classes.frendsPage}>
      <div className={classes.usersSector}>
        {props.users.map((u) => (
          <div className={classes.userCard} key={u.id}>
            <span>
              <div className={classes.userAvatar}>
                <img className={classes.userAvatarPhoto} src={u.photoUrl} />
              </div>
              <div>
                {u.followed ? (
                  <button
                    className={classes.follow__btn}
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Подписан
                  </button>
                ) : (
                  <button
                    className={classes.follow__btn}
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Отписан
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div className={classes.fullName}>{u.fullName}</div>
                <div className={classes.workedIn__text}>{u.workedIn}</div>
              </span>
              <span>
                <div className={classes.locationName}>{u.location.country + ", " + u.location.city}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frends;
