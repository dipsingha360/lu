const Home = () => {
  return (
    <div className="home container mx-auto py-10">
      {/* header  */}
      <header className="header">
        <div className="hero grid grid-cols-2 items-center bg-indigo-800 rounded-lg text-white ">
          <img
            src="https://scontent.fdac138-1.fna.fbcdn.net/v/t31.18172-8/25073508_1293483224131109_1607978397883420901_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHqGxkaelYMqbYarnuA9DxbJFNm-g2QTlQkU2b6DZBOVLPSXBR_DN9qJY_1L2efgxG30wpKhPt5o6YCgQN9SiG1&_nc_ohc=Zi7J9nzXev8AX-YGlAu&_nc_ht=scontent.fdac138-1.fna&oh=00_AfAVUOkmlqzVfDOmo8Hc_jGD7GJV6O13-cLkOakaFm7UhQ&oe=63FC576C"
            alt=""
            className="img col-span p-5 object-cover rounded-3xl  "
          />

          <div className="details p-10 flex flex-col gap-3 bg-indigo-700 rounded-lg">
            <h2 className="title text-3xl font-semibold uppercase">
              Lorem ipsum dolor sit amet ipsum dolor
            </h2>
            <p className="sub-title text-xl text-indigo-50/50 italic">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, eius.
            </p>
            <p className="description text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              vitae officia quidem sequi, accusantium cum voluptatem minima
              aspernatur rem consequatur.
            </p>
            <p className="description text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              vitae officia quidem sequi, accusantium cum voluptatem minima
              aspernatur rem consequatur. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Tenetur vitae officia quidem sequi, accusantium
              cum voluptatem minima aspernatur rem consequatur.
            </p>
            <p className="description text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              vitae officia quidem sequi, accusantium cum voluptatem minima
              aspernatur rem consequatur.
            </p>
          </div>
        </div>
      </header>

      {/* news and events  */}
      <section className="flex justify-between gap-3  py-10">
        <div className="news  border rounded p-3">
          <h2 className="text-center text-2xl text-indigo-600 font-bold py-3">
            News and Stories from Leading University
          </h2>
          <div className="cards flex gap-3 flex-warp-2">
            <div className="card p-2 w-80  flex flex-col items-center gap-3 rounded">
              <img
                src="https://www.blogtyrant.com/wp-content/uploads/2020/03/free-images-for-blog.png"
                alt=""
                className="rounded-lg w-72 h-36 object-cover"
              />
              <h2 className="text-lg font-medium px-3">
                Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor
              </h2>
            </div>

            <div className="card p-2 w-80  flex flex-col items-center gap-3 rounded">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6KQQQtnCi09Ja_Ic4sQ-dVkhH7dn3odFBQ&usqp=CAU"
                alt=""
                className="rounded-lg w-72 h-36 object-cover"
              />
              <h2 className="text-lg font-medium px-3">
                Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor
              </h2>
            </div>
            <div className="card p-2 w-80  flex flex-col items-center gap-3 rounded">
              <img
                src="https://www.artmarketstudies.org/wp-content/uploads/2016/10/blogging.jpg"
                alt=""
                className="rounded-lg w-72 h-36 object-cover"
              />
              <h2 className="text-lg font-medium px-3">
                Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor
              </h2>
            </div>
          </div>
        </div>
        <div className="events border rounded-lg">
          <div className="p-3">
            <h2 className="main-title text-center font-semibold text-xl mb-5">
              Upcoming Events
            </h2>

            <div className="event flex justify-center my-5 item gap-2">
              <div className="date  w-20 h-20 flex flex-col items-center justify-center bg-indigo-500 rounded">
                <p className="text-xl text-indigo-50">20</p>
                <p className="text-xl text-indigo-50">Jan</p>
              </div>
              <div className="details">
                <p className="title font-medium text-lg">Lorem, ipsum dolor.</p>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>

            <div className="event flex justify-center my-5 item gap-2">
              <div className="date  w-20 h-20 flex flex-col items-center justify-center bg-indigo-500 rounded">
                <p className="text-xl text-indigo-50">20</p>
                <p className="text-xl text-indigo-50">Jan</p>
              </div>
              <div className="details">
                <p className="title font-medium text-lg">Lorem, ipsum dolor.</p>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>

            <div className="event flex justify-center my-5 item gap-2">
              <div className="date  w-20 h-20 flex flex-col items-center justify-center bg-indigo-500 rounded">
                <p className="text-xl text-indigo-50">20</p>
                <p className="text-xl text-indigo-50">Jan</p>
              </div>
              <div className="details">
                <p className="title font-medium text-lg">Lorem, ipsum dolor.</p>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission bg-indigo-500 py-10 rounded-lg px-20">
        <div className=" text-indigo-50 p-3 ">
          <h2 className=" text-3xl font-medium mb-5 border-b border-dashed text-center py-2">
            Our mission
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            ipsum, facilis odio accusantium beatae excepturi perferendis
            voluptatum quas delectus repellendus facere? Accusamus ex incidunt
            sint, facilis quod, unde aliquam minima molestias dolore eos
            provident modi voluptatem labore. Illo, ea architecto aliquid
            adipisci, perferendis beatae ducimus mollitia assumenda voluptatum,
            laudantium sunt?
          </p>
        </div>
      </section>

      {/* news and events  */}
      <section className="flex justify-between gap-3  py-10">
        <div className="news  border rounded p-3">
          <h2 className="text-center text-2xl text-indigo-600 font-bold py-3">
            News and Stories from Leading University
          </h2>
          <div className="cards flex gap-3 flex-warp-2">
            <div className="card p-2 w-80  flex flex-col items-center gap-3 rounded">
              <img
                src="https://static.wixstatic.com/media/72c0b2_d1b6c7eb7cb9418bb24f0b21d377f276~mv2.jpg/v1/fit/w_2500,h_1330,al_c/72c0b2_d1b6c7eb7cb9418bb24f0b21d377f276~mv2.jpg"
                alt=""
                className="rounded-lg w-72 h-36 object-cover"
              />
              <h2 className="text-lg font-medium px-3">
                Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor
              </h2>
            </div>

            <div className="card p-2 w-80  flex flex-col items-center gap-3 rounded">
              <img
                src="https://static.wixstatic.com/media/0e0314_0a37b8770f5342f58fbad16bf83bc330~mv2.png/v1/fit/w_869%2Ch_496%2Cal_c/file.png"
                alt=""
                className="rounded-lg w-72 h-36 object-cover"
              />
              <h2 className="text-lg font-medium px-3">
                Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor
              </h2>
            </div>
            <div className="card p-2 w-80  flex flex-col items-center gap-3 rounded">
              <img
                src="https://thumbs.dreamstime.com/b/working-home-laptop-woman-writing-blog-female-hands-keyboard-65929526.jpg"
                alt=""
                className="rounded-lg w-72 h-36 object-cover"
              />
              <h2 className="text-lg font-medium px-3">
                Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor
              </h2>
            </div>
          </div>
        </div>
        <div className="events border rounded-lg">
          <div className="p-3">
            <h2 className="main-title text-center font-semibold text-xl mb-5">
              Upcoming Events
            </h2>

            <div className="event flex justify-center my-5 item gap-2">
              <div className="date  w-20 h-20 flex flex-col items-center justify-center bg-indigo-500 rounded">
                <p className="text-xl text-indigo-50">20</p>
                <p className="text-xl text-indigo-50">Jan</p>
              </div>
              <div className="details">
                <p className="title font-medium text-lg">Lorem, ipsum dolor.</p>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>

            <div className="event flex justify-center my-5 item gap-2">
              <div className="date  w-20 h-20 flex flex-col items-center justify-center bg-indigo-500 rounded">
                <p className="text-xl text-indigo-50">20</p>
                <p className="text-xl text-indigo-50">Jan</p>
              </div>
              <div className="details">
                <p className="title font-medium text-lg">Lorem, ipsum dolor.</p>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>

            <div className="event flex justify-center my-5 item gap-2">
              <div className="date  w-20 h-20 flex flex-col items-center justify-center bg-indigo-500 rounded">
                <p className="text-xl text-indigo-50">20</p>
                <p className="text-xl text-indigo-50">Jan</p>
              </div>
              <div className="details">
                <p className="title font-medium text-lg">Lorem, ipsum dolor.</p>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
