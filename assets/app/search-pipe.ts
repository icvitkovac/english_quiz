/**
 * Created by c on 4/19/16.
 */
***REMOVED***
import {PipeTransform, Pipe, Injectable} from "angular2/core";

@Pipe({
  name: "search",
  pure: false
})
@Injectable()

export class SearchPipe implements PipeTransform {
  transform(value, args) {
    if (value == null) {
      return null;
***REMOVED***

    return value.filter((item)=>item.value.startsWith('s'));
***REMOVED***
}
