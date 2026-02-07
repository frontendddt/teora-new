"use client";
import MenuCard from "./MenuCard";

export default function FooterMenu({ sections }) {
  return (
    <>
      <section>
        <h4 className="heading_titles purpleColor adminh4">Footer Menu</h4>
        <div className="row">
          {sections.map((sec) => (
            <div className="col-12" key={sec.id}>
              <MenuCard section={sec} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
