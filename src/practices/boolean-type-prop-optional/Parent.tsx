import OptionalChild from './OptionalChild';
import RequiredChild from './RequiredChild';

export default function Parent() {
  return (
    <div>
      <section>
        <h1>Required</h1>
        {/* Required이어도 ={true}는 생략 가능 */}
        <RequiredChild isRed={true} content="true" />
        <RequiredChild isRed={false} content="false" />
      </section>
      <section>
        <h1>Optional</h1>
        <OptionalChild isRed content="true" />
        <OptionalChild content="false" />
      </section>
    </div>
  );
}
