import { inject } from "@angular/core";
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { CourseService } from "../services/course.service";
import { removeEntity, setAllEntities, withEntities } from "@ngrx/signals/entities";
import { catchError, EMPTY } from "rxjs";

type CourseEntity = { id: number };

export const CourseStore = signalStore(
{ providedIn: 'root' },
withEntities<CourseEntity>(),
withState({ error: null as string | null }),
withMethods((store, svc = inject(CourseService)) => ({
deleteCourse(id: number) {
    const previousSnapshot = store.entities();
    patchState(store, removeEntity(id));
    svc.delete(id).pipe(
catchError(err => {
    patchState(store, setAllEntities(previousSnapshot));
patchState(store, { error: 'Cannot delete course: active student enrollmentsexist.'});
return EMPTY;
})
).subscribe();
}
}))
);